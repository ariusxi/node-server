'use strict';

const express = require('express');
const router = express.Router();

//chamando o controller
const controller = require('../controllers/order-controller');
const authService = require('../services/auth-service');

//definindo cada tipo de requisição
router.get('/', authService.authorize, controller.get);
router.post('/', authService.authorize, controller.post);

module.exports = router;