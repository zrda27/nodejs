/**
 * Created by zrd on 2016/8/29.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo');//；连接数据库
module.exports = mongoose;