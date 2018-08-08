'use strict';

const express = require('express');
const router = express.Router();
//chamando o controllers
const controller = require('../controllers/product-controller');

//definindo cada tipo de requisição
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;