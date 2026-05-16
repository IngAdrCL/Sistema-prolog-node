# Sistema con Prolog y Node.js

## Descripción
Este proyecto implementa un sistema utilizando Prolog (Tau Prolog) integrado con Node.js mediante una API REST. Permite realizar consultas lógicas sobre contratos y determinar si aplican penalizaciones.

---

## Tecnologías utilizadas
- Node.js
- Express
- Tau Prolog

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/IngAdrCL/Sistema-prolog-node.git

## Ejecución del proyecto
Sigue estos pasos para ejecutar el sistema correctamente:

### 1. Abrir una terminal
Ubícate dentro de la carpeta del proyecto:

```bash
cd sistema-experto-prolog-node
2. Ejecutar el servidor
node index.js

Si todo funciona correctamente, deberías ver un mensaje como:

Servidor en http://localhost:3000
3. Probar la API

Puedes usar herramientas como:

Thunder Client (VS Code)
Postman
curl
4. Realizar una consulta

Configura una petición:

Método: POST
URL:
http://localhost:3000/query
Body (JSON):
{
  "query": "penalty_applicable(X)."
}
5. Ver el resultado

Deberías recibir una respuesta como:

{
  "success": true,
  "result": [
    "X = contract1"
  ]
}