require('./config/config');
const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');

const app = express();

// Body parser para input JSON
app.use(bodyParser.json());

app.post('/test', (req, res) => {

    let body = req.body;
    console.log(body);

    

    res.json({
        body: 'OK'
    });
})

console.log('');
console.log('=========='.green);
console.log('Iniciando Servidor'.green);
app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`.green);
    console.log('========='.green);
    console.log('');
})