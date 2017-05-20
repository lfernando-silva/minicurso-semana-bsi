const DispositivoDAO = require('../bd/dao/DispositivoDAO.js')

module.exports = {
    findAll: DispositivoDAO.findAll,
    find: DispositivoDAO.find,
    insert: DispositivoDAO.insert,
    update: DispositivoDAO.update,
    remove: DispositivoDAO.remove,
}