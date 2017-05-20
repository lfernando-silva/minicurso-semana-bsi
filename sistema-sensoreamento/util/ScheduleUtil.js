var Schedule = require('node-schedule');
var RandomUtil = require('./RandomUtil.js')
var CalendaryUtil = require('./CalendaryUtil.js');
var Leitura =  require('../model/Leitura.js');

var ScheduleUtil = {
     
    executeScheduledTasks: function (interval) {
        var recurrence = new Schedule.RecurrenceRule();
        recurrence.second = Array.from({length:60/(interval || 5)}, (e,i) => i*(interval || 5));       
        var tasks = Schedule.scheduleJob(recurrence, function () {
            console.log("Verificando leituras em: " + CalendaryUtil.getFormattedDate(new Date()).complete);
            return RandomUtil.generateLeituras()
        });
    }
};

module.exports = ScheduleUtil;