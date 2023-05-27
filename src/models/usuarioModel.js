const db = require("./db");

function registrarUsuario(nick){

return db.insertOne(nick);

};

function buscarUsuario(idUser){

return db.findOne(idUser);
    
};

function mudarUsuario(nick){

return db.updateOne(nick);
    
}; module.exports = {registrarUsuario,buscarUsuario,mudarUsuario};