var http = require("http");  //引用模块http
var urlLib = require("url");  //引用模块url

var server = http.createServer(function(req,res){
	
	var obj = urlLib.parse(req.url,true);
	
	var str = obj.pathname;
	var GET = obj.query;
	
	
	console.log(str,GET);
	
	res.write("aaa");
	res.end();
	
})

server.listen(3000);
