'use strict'

//Importando módulos
const express = require('express');

//Criando aplicação
const app = express();
const router = express.Router();

//Criando rota
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
//Atribuindo rota
app.use('/', route);

//Exportando APP
module.exports = app;