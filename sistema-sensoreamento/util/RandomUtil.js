const Promise = require('bluebird')
const Dispositivo = require('../model/Dispositivo.js')
const Leitura = require('../model/Leitura.js')
const _ = require('lodash')

module.exports = {
    generateLeituras: () => {
        return Promise
        .resolve()
        .then(() => {
            return Dispositivo.findAllIds()
        })
        .then(ids => {
            let dispositivo_id = Math.floor((Math.random() * ids.length))
            let leitura = {
                created_at: new Date(),
                updated_at: new Date(),
                deactivated_at: null,
                valor: Math.random() * 100,
                dispositivo_id: ids[dispositivo_id].id
            }
            return Leitura.insert(leitura)
        })
    }
}