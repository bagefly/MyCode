var http = require("http");  //引用模块http
var querystring = require("querystring");  //引用模块querystring


var server = http.createServer(function(req,res){
	
//	console.log(req.url);

	var GET = {};
	
	//判断数据有没有？  如果有获取数据
	if( req.url.indexOf("?") != -1){
		
		var str = req.url.substr(2); //截取需要的内容
		
		GET = querystring.parse(str);  //通过模块方法转成json格式
		
	}else{
		str = req.url;
	}
	
	
	console.log(str,GET);
	
	res.write("aaa");
	res.end();
	
})

server.listen(3000);
