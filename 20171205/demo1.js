//第一步导入mongodb模块，里面是一个对象
var MongoClient = require("mongodb").MongoClient;
var DB_CONN_STR = "mongodb://localhost:27017/lianxi";  //选库
//                  路径：协议/表名

//添加数据
var insertData = function(db,cb){
	
	//连接到表
	var collection = db.collection('students');
	
	//编辑数据
	var data = [{"name":"aaa","age":19},{"name":"艾斯","age":18}];
	
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

//查询所有数据
var selectDataAll = function(db,cb){
	//连接到表
	var collection = db.collection('students');
	
	collection.find().toArray(function(err,result){
		if(err){
			console.log("出错了！"+ err);
			return;
		}
		
		cb(result);
	})
}

//有条件的查询数据
var selectData = function(db,cb){
	//连接到表
	var collection = db.collection('students');
	//查找的条件
	var whereStr = {"name":"xiaoming"};
	
	collection.find(whereStr).toArray(function(err,result){
		if(err){
			console.log("出错了！"+ err);
			return;
		}
		
		cb(result);
	})
}


//删除数据
var removeData = function(db,cb){
	
	//连接到表
	var collection = db.collection('students');
	
	//查询条件
	var whereStr = {"name":"aaa"};
	
	collection.remove(whereStr,function(err,result){
		if(err){
			console.log("出错了！"+ err);
			return;
		}
		
		cb(result);
	})
	
	
}

var upData = function(db,cb){
	
	//连接到表
	var collection = db.collection('students');
	
	//查询条件和修改的数据内容
	var whereStr = {"name":"xiaoming"};
	var updateStr = {$set:{"age":19}};
	
	//调用方法
	collection.update(whereStr,updateStr,function(err,result){
		if(err){
			console.log("出错了！"+ err);
			return;
		}
		
		cb(result);
	})
}

//第二步连接数据库 ， 如果成功会执行回调函数里面的内容
MongoClient.connect(DB_CONN_STR,function(err,db){
	console.log("连接成功！");
	
//	添加数据
//	insertData(db,function(result){ //db数据的信息，函数
//		
//		console.log(result);
//	})
	
	//查询所有数据
	selectDataAll(db,function(result){
		console.log(result)
	})

	//有条件的查询数据
//	selectData(db,function(result){
//		console.log(result)
//	})

	//删除数据
//	removeData(db,function(result){
//		console.log(result);
//	})
//	
	
	//改变数据
//	upData(db,function(result){
//		console.log(result);
//	})
	
})
