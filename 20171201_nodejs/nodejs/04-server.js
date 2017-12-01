var http = require("http");  //导入node自带的http模块


//创建一个服务，如果有人访问，打印内容
var server = http.createServer(function(req,res){
	
	console.log("有客到~");
	
	res.write("I am text");  //输出内容
	res.end();				 //结束
	
	
})

server.listen(3000);  //监听3000端口