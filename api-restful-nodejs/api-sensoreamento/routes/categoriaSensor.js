const express = require('express')
const router = express.Router()
const CategoriaSensor = require('../model/CategoriaSensor.js')

router.get('/', (req, res) => {
    return CategoriaSensor
    .findAll()
    .then(categorias => res.send(categorias))
})

router.get('/:id', (req, res) => {
    let id = req.params.id
    return Leitura
    .find({'categoria.id': id})
    .then(categoria => res.send(categoria))
})

module.exports = router