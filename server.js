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
server.on('error', onError);
server.on('listening', onListening);

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

//Tratando erros de servidor
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe' + port :
        'Port' + port;

    switch(error.code){
        case  'EACCES':
            console.error(bind + 'requires elevated privileges');
            process.exit(1);
            break;

        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}