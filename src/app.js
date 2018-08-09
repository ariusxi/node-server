'use strict'

//Importando módulos
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Criando aplicação
const app = express();
const router = express.Router();

//Conectando ao banco
mongoose.connect('mongodb://admin:master123@ds018248.mlab.com:18248/nodestr');

//Carregando Models
const Product = require('./models/product-model');
const Customer = require('./models/customer-model');
const Order = require('./models/order-model');

//Carregando as rotas
const indexroute = require('./routes/index-route');
const productroute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Atribuindo rota
app.use('/', indexroute);
app.use('/product', productroute);

//Exportando APP
module.exports = app;