/**
 * Created by zrd on 2016/8/28.
 */
var hbs = require('hbs');
hbs.registerHelper("datetimeStr", function(date){
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
});
hbs.registerHelper("compare", function(v1, v2, options){
    if(v1 > v2){
        return options.fn(this);
    }else{
        return options.inverse(this);
    }
});
hbs.registerHelper("equal", function(v1, v2, options){
    if(v1 == v2){
        return options.fn(this);
    }else{
        return options.inverse(this);
    }
});
hbs.registerHelper("add", function(v1, v2){
    return v1 + v2;
});
hbs.registerHelper("sub", function(v1, v2){
    return v1 - v2;
});
hbs.registerHelper('fromTo', function(begin, end, options){
    var ret = '';
    for(var i=begin; i<= end; i++){
        ret += options.fn({index: i});
    }
    return ret;
});

module.exports = function(partialsPath){
    if(partialsPath){
        hbs.registerPartials(partialsPath);
    }
    return hbs;
}
