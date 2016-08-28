var express = require('express');
var router = express.Router();
var navItems = require('../bin/genNavItems');

/* GET home page. */
router.get('/', function(req, res) {
  req.session.page = "index";
  res.render('index', {
    title: '首页',
    navItems: navItems,
    req : req,
    page: function(index){
      return "首页" + index;
    }
  });
});

module.exports = router;
