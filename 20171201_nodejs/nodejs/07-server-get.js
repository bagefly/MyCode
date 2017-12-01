var http = require("http");


var server = http.createServer(function(req,res){
	
//	console.log(req.url);

	var GET = {};
	
	//判断数据有没有？  如果有获取数据
	if( req.url.indexOf("?") != -1){
		
		var str = req.url.substr(2);  //截取前面2个字符串， /?
		
		var arr = str.split("&");  //分割成每个数据
		
//		["user=admin" ," password=123456"]

		
		for(var i=0;i<arr.length;i++){  //循环数组长度
			
			var arr2 = arr[i].split("=");  //把每个数据通过=分割
			 
//			 arr2 = ["user","admin"]
			 
			GET[arr2[0]] = arr2[1];  //存入全局json对象
		}
		
	}else{
		str = req.url;  //如果没有就是req.url的内容
	}
	
	console.log(str,GET);
	
	res.write("aaa");
	res.end();
	
})

server.listen(3000);
