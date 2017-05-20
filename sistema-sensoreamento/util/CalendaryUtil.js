var moment = require('moment-timezone');

var CalendaryUtil = {
    
    getFormattedDate: function (data) {
        
        var dt = moment.tz(data, "America/Sao_Paulo").format().toString(); // 2013-11-18T11:55:00-05:00
        
        var fdate = {
            date: dt.slice(0, dt.indexOf('T')), //2013-11-18
            hour: dt.slice(11, 19), //11:55:00
            week: new Date().getUTCDay(), //0 a 6
            complete: dt.slice(0, 19).replace("T", " ") //2013-11-18 11:55:00
        };
        return fdate;
    },
    
    getDtExpiracao: function (date) {
        date.setSeconds(date.getSeconds() + 5);
        return CalendaryUtil.getFormattedDate(date).complete;
    }
};

module.exports = CalendaryUtil;
