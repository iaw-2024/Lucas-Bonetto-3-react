const express = require("express");

const app = express();
const fs = require('fs');

app.get("/data", (req, res) => {
    fs.readFile('./datos.json', 'utf8', (err,data)=>{
        if(err){
            console.error('Error al leer el archivo de datos:', err);
            res.status(500).send('Error interno del servidor');
        return;
        }
        console.log("Se esta haciendo el get en el server");
        res.status(200).send(JSON.parse(data));
    });
});

app.use(express.static('api'));

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;