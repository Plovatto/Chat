exports.get=async(req,res)=>{
return {"status":"OK","controller":"Sala"};}

    const salaModel = require('../models/salaModel');

exports.get=async()=>{
return await salaModel.listarSalas();
}
const token = require("../util/token");
const usuarioModel = require('../models/usuarioModel');

exports.entrar=async(nick)=>{
let resp = await usuarioModel.registrarUsuario(nick);
if(resp.insertedId){
return {"idUser":resp.insertedId,
"token": await token.setToken(JSON. stringify(resp.insertedId).replace(/"/g, ''),nick),
"nick":nick}}}
