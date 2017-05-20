const CategoriaSensorDAO = require('../bd/dao/CategoriaSensorDAO.js')

module.exports = {
    findAll: CategoriaSensorDAO.findAll,
    find: CategoriaSensorDAO.find
}