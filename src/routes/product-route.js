'use strict';

const express = require('express');
const router = express.Router();
//chamando o controller
const controller = require('../controllers/product-controller');

//definindo cada tipo de requisição
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag', controller.getByTag);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;