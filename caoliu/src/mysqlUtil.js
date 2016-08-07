/**
 * Created by zrd on 2016/8/4.
 */
var connectParams = {
    host : 'localhost',
    user : 'caoliu',
    password : '123456',
    port : '3306',
    database: 'caoliu',
    charset: 'utf8'
}

var pool = null;

exports.initConn = function(){
    pool = require("mysql").createPool(connectParams);
    console.log("init success");
};
exports.getConn = function(queryCallback){
    pool.getConnection(function(err, connection){
        queryCallback(err, connection);
        if(!err){
            connection.release();
        }
    });
};