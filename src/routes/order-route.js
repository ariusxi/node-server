'use strict';

const express = require('express');
const router = express.Router();

//chamando o controller
const controller = require('../controllers/order-controller');

//definindo cada tipo de requisição
router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;