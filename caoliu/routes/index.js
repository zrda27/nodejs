var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/', function(req, res, next) {
  console.info(req.params)
  console.info(req.query)
  console.info(req.body)
  res.render('index', { title: '主页' });
});

module.exports = router;
