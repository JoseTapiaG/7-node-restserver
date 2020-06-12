require('./config/config');
const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');

const app = express();

// Body parser para input JSON
app.use(bodyParser.json());

app.get('/usuarios', (req, res) => {
    res.json('get Usuario');
})

app.post('/usuarios', (req, res) => {

    let body = req.body;

    if (!body.nombre) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
        return;
    }

    res.json({
        metodo: 'Post',
        body
    });
})

app.put('/usuarios/:id', (req, res) => {
    let id = req.params.id;
    res.json(`put Usuario ${id}`);
})

console.log('');
console.log('=========='.green);
console.log('Iniciando Servidor'.green);
app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`.green);
    console.log('========='.green);
    console.log('');
})