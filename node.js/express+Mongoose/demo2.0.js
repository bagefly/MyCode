//引入mongoose
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/1708class");

var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));

db.once('open',function(callback){
    console.log("打开数据库了！！！");

    var kittySchem = mongoose.Schema({
        name: String
    })

    kittySchem.methods.speak = function(){
        var miao = this.name ? "我的名字是" + this.name : "我没有名字！";
    
        console.log(miao);
    }

    var kitten = mongoose.model("Kitten",kittySchem);

    var silence = new kitten({"name":"机器猫"});
    console.log(silence.name);

    silence.save(function(err,result){
        if(err) return console.log(err);

        silence.speak();
    })
})
