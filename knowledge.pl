contract(contract1).
contract(contract2).

breach(contract1).

penalty_applicable(X) :- breach(X).