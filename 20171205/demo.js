//第一步导入mongodb模块，里面是一个对象
var MongoClient = require("mongodb").MongoClient;
var DB_CONN_STR = "mongodb://localhost:27017/lianxi";
//                  路径：协议/表名


var insertData = function(db,cb){
	
	//连接到表
	var collection = db.collection('students');
	
	//编辑数据
	var data = [{"name":"xiaoming","age":22},{"name":"鹏涛","age":18}];
	
	//添加数据
	collection.insert(data,function(err,result){
		
		if(err){
			console.log("出错了！"+ err);
			return;
		}
		
		cb(result);
		
		//有错误，打印错误，并结束，没错误调用回调函数
	})
	
}

//第二步连接数据库 ， 如果成功会执行回调函数里面的内容
MongoClient.connect(DB_CONN_STR,function(err,db){
	console.log("连接成功！");
	
//	添加数据
	insertData(db,function(result){
		console.log(result);
	})
	
})
