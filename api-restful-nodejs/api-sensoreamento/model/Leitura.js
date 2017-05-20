const LeituraDAO = require('../bd/dao/LeituraDAO.js')

module.exports = {
    findAll: LeituraDAO.findAll,
    find: LeituraDAO.find,
    findAllWithDispositivo: LeituraDAO.findAllWithDispositivo,
    findWithDispositivo: LeituraDAO.findWithDispositivo
}