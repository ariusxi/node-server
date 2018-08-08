'use strict';

const express = require('express');
const router = express.Router();

//select
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    })
});

//insert
router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

//update
router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    res.status(200).send({
        id: id, 
        item: req.body
    });
});

//delete
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(req.body);
});

module.exports = router;