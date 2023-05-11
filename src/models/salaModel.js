function listarSalas() {
    return [
    {
    "_id": {
    "$oid": "643ece43ea11e6e5b0421f10"
    },
    "nome ": "Guerreiros da Info Cimol",
    "tipo": "publica"
    },{
    "_id": {
    "Soid": "643ecec1ealle6e5b0421f12"
    },
    "nome": "Só os confirmados da INFO",
    "tipo": "privada",
    "chave": "at844haw"
    },
    {
    "_id": {
    "$oid": "643f22a2ea11e6e5b0421f18"
    },
    "nome": "Guerreiros da INFO",
    "tipo":"publico"
    }];}
   
    const db = require("./db");
function listarSalas() {
return db.findAll("salas");
}

module.exports = {listarSalas}
