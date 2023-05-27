

exports.get=async()=>{

return await salaModel.listarSalas();

};

const token = require("../util/token");


exports.entrar=async(nick, token)=>{

const usuarioModel = require('../models/usuarioModel');

let sala = await salaModel.registrarSala(token);

let usuario = await usuarioModel.registrarUsuario(nick);

usuario.sala = {token:sala.token,descricao:sala.descricao,nome:sala.nome};


if(await usuarioModel.mudarUsuario(usuario)){

   return {"idUser":resp.insertedId,
   "token": await token.setToken(JSON. stringify(resp.insertedId).replace(/"/g, ''),nick),
   "nick":nick}

     }; 
};

exports.saindo=async(usuario)=>{

    const usuarioModel = require('../models/usuarioModel');
    
    const usuario = await usuarioModel.registrarUsuario(nick);
    
    usuario.sala={nome:"",descricao:"",token:""};

};

exports.nova=async(nome,descricao,token)=>{

    const resp = await salaModel.registrarSala(token,nome,descricao);
    
    if(resp.insertedId){return{"token":resp.insertedId,
    "descricao":descricao,
    "nome":nome,}};
    
};

exports.enviarMensagem = async(nick, msg, idSala)=>{
    
    const sala = await salaModel.buscarSala(idSala);
    
    if(!sala.msgs){

        sala.msgs=[];

    };


    timestamp=Date.now();

    sala.msgs.push({ 

        "timestamp":timestamp,
        "msg":msg, 
        "nick": nick

    });
    
   
    let resp = await salaModel.atualizarMensagens(sala,msgs);

    return {"timestamp":timestamp, "msg":"OK", "nick": nick};

};

exports.buscarMensagens = async (idSala, timestamp)=>{
    
    let mensagens = await salaModel.buscarMensagem(idSala, timestamp);
    
    return{

        "timestamp": mensagens[mensagens.lenght - 1],
        "msgs": mensagens,
        
};};
