const express = require('express')
const router = express.Router()
const Dispositivo = require('../model/Dispositivo.js')

router.get('/', (req, res) => {
    return Dispositivo
    .findAll()
    .then(dispositivos => res.send(dispositivos))
})

router.get('/:id', (req, res) => {
    let id = req.params.id
    return Dispositivo
    .find({'dispositivo.id': id})
    .then(dispositivo => res.send(dispositivo))
})

router.post('/new', (req, res) => {
    let newDispositivo = {
        nome: req.body.nome,
        categoria_dispositivo_id: req.body.categoria_id,
        created_at: new Date(),
        updated_at: new Date()
    }
    return Dispositivo
    .insert(newDispositivo)
    .then(done => res.send(done))
})

router.put('/update/:id',(req, res) => {
    let id = req.params.id
    let update = {
       'updated_at': new Date()
    }

    if(req.body.nome) update.nome = req.body.nome
    if(req.body.categoria_id) update.categoria_dispositivo_id = req.body.categoria_id
    return Dispositivo
    .update(update, {'dispositivo.id': id})
    .then(done => res.send({'updated': done}))
})

router.delete('/delete/:id', (req, res) =>{
    let id = req.params.id
    return Dispositivo.remove({'dispositivo.id': id}).then(done => res.send({'removed': 1}))
})

module.exports = router