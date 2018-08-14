'use strict'

//Importando módulos
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

//Criando aplicação
const app = express();
const router = express.Router();

//Conectando ao banco
mongoose.connect(config.connectionString);

//Carregando Models
const Product = require('./models/product-model');
const Customer = require('./models/customer-model');
const Order = require('./models/order-model');

//Carregando as rotas
const indexroute = require('./routes/index-route');
const productroute = require('./routes/product-route');
const customerroute = require('./routes/customer-route');
const orderroute = require('./routes/order-route');

//Limitando tamanho da requisição
app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({ 
    extended: false
}));

//Habilita o CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

//Atribuindo rota
app.use('/', indexroute);
app.use('/product', productroute);
app.use('/customer', customerroute);
app.use('/order', orderroute);

//Exportando APP
module.exports = app;