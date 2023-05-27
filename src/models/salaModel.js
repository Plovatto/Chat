const db = require("./db");

function listarSalas() {
   
    let salas = db.findAll(salas);
    
    return salas;
};
   
function registrarSala() {
   
   return db.findOne(salas);

};

function novaSala(){

if(descricao=="publica"){

return db.insertOne(salas);

}};
    
let atualizarMensagens = async (sala, msgs)=>{

    return db.updateOne(msgs);

};

let buscarMensagem = async (idsala, timestamp)=>{

    let sala = await buscarSala(idsala);

    if(sala.msgs){

    let msgs=[];

    sala.msgs.forEach((msg)=>{

    if(msg.timestamp>=timestamp){

    msgs.push(msg);

};}); return msgs; };

    return [];

};

module.exports = {listarSalas,registrarSala,novaSala,atualizarMensagens,buscarMensagem};
