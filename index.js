const express = require('express');
require('dotenv').config(); 

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log("Servidor escuchando en el puerto " + process.env.PORT);
});
function Hello(){

    var mensaje = "Hello Juan Developer cambio"
    console.log(mensaje)
}

// funcion sumar dos numeros
function sumar(a, b){
    return a + b;
}

