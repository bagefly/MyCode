//引入mongoose
var mongoose = require("mongoose");

//连接数据库
mongoose.connect("mongodb://localhost/lianxi");

//获取的db对象
var db = mongoose.connection;  //连接

//添加报错事件，发生错误时候输出
db.on('error',console.error.bind(console,'connection error'));

//添加一个打开的事件，只执行一次，执行的话表示数据被打开
db.once('open',function(callback){
	console.log("打开数据库了！！！");
	
	//定义一个模式，里面有一个name属性给他定义一个类型(数据加上一些设定，类型)
	//静态文件
	var kittySchem = mongoose.Schema({
		name: String
	})
	
	//类似于在原型中添加方法，用的很少，methods里面存储方法
	kittySchem.methods.speak = function(){
		var miao = this.name ? "我的名字是" + this.name : "我没有名字！";
		console.log(miao);
	}
	
	//讲模式放入一个kitten模型中，这个模型是一个类
	var Kitten = mongoose.model("Kitten",kittySchem);
	
	//实例化
	var silence = new Kitten({"name": "机器猫"});
	console.log(silence.name);
	
	silence.save(function(err,result){
		if(err) return console.log(err);
		
		silence.speak();
	})
	
	
})
