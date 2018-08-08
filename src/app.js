'use strict'

//Importando módulos
const express = require('express');

//Criando aplicação
const app = express();
const router = express.Router();

//Criando rotas
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

//Atribuindo rota
app.use('/', route);
app.use('/products', create);

//Exportando APP
module.exports = app;