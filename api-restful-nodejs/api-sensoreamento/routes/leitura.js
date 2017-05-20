const express = require('express')
const router = express.Router()
const Leitura = require('../model/Leitura.js')

router.get('/', (req, res) => {
    return Leitura
    .findAll()
    .then(leituras => res.send(leituras))
})

router.get('/:id', (req, res) => {
    let id = req.params.id
    return Leitura
    .find({'leitura.id': id})
    .then(leitura => res.send(leitura))
})

router.get('/:id/dispositivo', (req, res) => {
    let id = req.params.id
    return Leitura
    .findWithDispositivo({'leitura.id': id})
    .then(leitura => res.send(leitura))
})

module.exports = router