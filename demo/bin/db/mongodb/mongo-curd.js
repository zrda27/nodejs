/**
 * Created by zrd on 2016/8/29.
 */
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/demo');//；连接数据库
var Schema = mongoose.Schema;   //  创建模型
var userScheMa = new Schema({
    name: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
var user = db.model('users', userScheMa); //  与users集合关联
db.model('users').find({}, function(err, doc){
    if(err){
        console.log(err);
    }
    console.log(doc);
});