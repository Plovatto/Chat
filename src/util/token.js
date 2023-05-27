const jwt = require('jsonwebtoken');



const checktoken = async (token, id, key) => {

jwt.verify(token, key, (err, decoded) => {

if (err) {

console.error('Token falhou:', err);
           
} else {

        console.log('Token verificado');

        console.log('decodificado', decoded);

  if (decoded.id===id) {

        console.log('Token é valido');
              
} else {
        console.log('Token não é valido');

};};});};
      

const setToken = async (id, key) =>{

console.log(id);

if (id){

return jwt.sign({id }, key, { expiresIn: 28800 });

};

return false;

};

module.exports = {

checktoken,
setToken,

};



