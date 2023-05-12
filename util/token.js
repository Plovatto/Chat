const jwt= require('jsonwebtoken');

const checktoken = async (token, id, key) => jwt.verify(token, key, (err, decoded) => {});

const setToken = async (id, key) =>{

console.log(id);
if (id){
return jwt.sign({id }, key, { expiresIn: 28800 });
}
return false;
};

module.exports= {
checktoken,
setToken,
};


const db = require("./db");
 async function registrarUsuario(nick) {

return await db.insertOne("usuario",{"nick": nick});
 }
module.exports={registrarUsuario}


async function insertOne(collection, objeto){
    const db = await connect();
    return db.collection(collection).insertOne(objeto);
    }
    