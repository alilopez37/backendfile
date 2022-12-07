var express = require('express');
var router = express.Router();
const fileController = require('../controller/file')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Estoy en la raíz de users');
});

router.post('/file',fileController.file);

module.exports = router;