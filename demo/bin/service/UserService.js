/**
 * Created by zrd on 2016/10/1.
 */
var User = require('../db/model/User');
new User({
    name: 'zrdd',
    password: '123',
    abc: 1
}).save(function(err, doc){
    if(err){
        console.log(err);
    }
    console.log(doc);
});
User.find({}).limit(2).exec(function(err, doc){
    if(err){
        console.log(err);
    }
    console.log(doc);
});