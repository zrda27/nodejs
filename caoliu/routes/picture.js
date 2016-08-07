var express = require('express');
var mysqlUtil = require('../src/mysqlUtil');
var EventProxy = require("EventProxy")
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    mysqlUtil.getConn(function(err, conn){
        if(!err) {
            var ep = new EventProxy();
            ep.fail(function(err){
                next(err);
            });
            conn.query('select * from tbPage', ep.done("data"));
            conn.query('select count(id) as count from tbPage', ep.done("count"));
            ep.all("data", "count", function(data, count){
                console.log("all:" + data.length);
                console.log("all:" + count[0]["count"]);
                res.render('picture/index', {
                    title: 'Picture',
                    count: count[0]["count"],
                    data: data
                });
            });
        }else{
            next(err);
        }
    });
});

router.get('/detail', function(req, res, next) {
    mysqlUtil.getConn(function(err, conn){
        if(!err) {
            conn.query('select * from tbImg where pageId=' + req.query.pageId + " order by createTime", function(err, rows){
                res.render('picture/pictures', {
                    title: req.query.title,
                    pictures: rows
                });
            });
        }else{
            next(err);
        }
    });
});

module.exports = router;