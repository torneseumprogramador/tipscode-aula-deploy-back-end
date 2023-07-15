var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ message: 'Bem vindo a aula de deploy com a galera do tipscode' });
});

module.exports = router;
