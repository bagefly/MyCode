var http = require("http");

//创建一个服务
var server = http.createServer(function(req,res){
	
//	console.log(req);  //有很多信息
	console.log(req.url);  //路径有关
	
	//根据请求的地址，判断回馈信息
	switch(req.url){
		case "/1.html":
			res.write("1111111111");
			break;
		case "/2.html":
			res.write("2222222222");
			break;
		default:
			res.write("404.html");
			break;
	}
	
	res.end();
})

server.listen(3000); //端口是可以改的，也可能会被占用
