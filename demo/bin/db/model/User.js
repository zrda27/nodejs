/**
 * Created by zrd on 2016/10/1.
 */
var mongoose = require('../mongodb/mongooseInit');
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    password: String
});
module.exports = mongoose.model('user', userSchema); //  与users集合关联