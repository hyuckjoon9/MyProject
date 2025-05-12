var express = require('express');
var router = express.Router();

var listController = require('../controllers/listController');
var writeController = require('../controllers/writeController');
var updateController = require('../controllers/updateController');
var detailController = require('../controllers/detailController');

router.get('/', (req, res) => {
  res.redirect('/board/list');
});

router.get('/list', listController.getList);

router.get('/write', writeController.tempWrite);

router.get('/update', updateController.tempUpdate);

router.get('/detail/:id', detailController.getDetail);

module.exports = router;
