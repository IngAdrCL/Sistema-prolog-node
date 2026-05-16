const express = require('express');
const fs = require('fs');
const pl = require('tau-prolog');

require('tau-prolog/modules/lists')(pl);

const app = express();
app.use(express.json());

const knowledge = fs.readFileSync('knowledge.pl', 'utf8');

app.post('/query', (req, res) => {
    const query = req.body.query;

    if (!query) {
        return res.status(400).json({ error: "Falta la consulta" });
    }

    const session = pl.create(1000);

    session.consult(knowledge, {
        success: () => {
            session.query(query, {
                success: () => {

                    let results = [];

                    const callback = (answer) => {
                        if (answer === false) {
                            // 🔥 ya no hay más respuestas
                            if (results.length === 0) {
                                return res.json({ success: true, result: "false" });
                            } else {
                                return res.json({ success: true, result: results });
                            }
                        } else {
                            // 🔥 convertir respuesta a texto
                            const formatted = pl.format_answer(answer);
                            results.push(formatted);

                            // seguir buscando más respuestas
                            session.answer(callback);
                        }
                    };

                    session.answer(callback);
                },
                error: err => {
                    res.json({ success: false, error: err.toString() });
                }
            });
        },
        error: err => {
            res.json({ success: false, error: err.toString() });
        }
    });
});

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});