var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.info(req.params)
  console.info(req.query)
  console.info(req.body)
  res.render('index', { title: 'Express' });
});

module.exports = router;
