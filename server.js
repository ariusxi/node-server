'use strict'

//Importando modulos do servidor
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

//criando aplicação e definindo porta
const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//criando servidor
const server = http.createServer(app);
const router = express.Router();

//configurando rotas
var route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'Node Store API',
        version: '0.0.1'
    });
});

//definindo caminho das rotas
app.use('/', route);

server.listen(port);
console.log('API rodando na porta ' + port);

//Função para verificar a porta disponivel e normaliza-la
function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false;
}