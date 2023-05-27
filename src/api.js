
const url = 'mongodb://localhost:3000';

var express = require("express");

var app= express();

app.use(express.urlencoded({extended : true}));

app.use(express.json());

const router = express.Router();

app.use('/', router.get('/', (req, res)=>{

res.status(200) .send("<h1>API - CHAT</h1>")

}));

app.use('/', router.get("/sobre", (req, res, next)=>{
    
    res.status(200).send({

    "nome":"api-chat",
    "versão":"0.1.0",
    "autor":"plovatto"

});

}));
    
app.use(" /salas",router.get("/salas", (req, res, next) => {

    const salaController = require("../src/controllers/salaController");
    
    let resp=salaController.get();
    
    res.status(200).send(resp);

}));

app.use("/sala/sair", router.put("/sala/sair", async (req, res, next)=>{
   
    let resp = await salaController.sair(req.body.idUser);
   
    res.status(200).send(resp);

}));

        
app.use("/entrar",router.post ("/entrar", async(req, res, next) => {
    
    const usuarioController = require("./controllers/usuarioController");
    
    let resp= await usuarioController.entrar(req.body.nick);
    
    res.status(200).send(resp);

})); 

app.use("/sala/criar", router.post("/sala/criar", async(req, res, next)=>{
   
    let resp = await salaController.criar(req.body.nome, req.body.tipo, req.body.chave);
    
    res.status(200).send(resp);

})); module.exports=app;
    