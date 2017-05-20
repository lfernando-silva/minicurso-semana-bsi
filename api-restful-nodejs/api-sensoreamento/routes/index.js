var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send({'index': 'API Sensoreamento' })
});

module.exports = router;
