var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password: 'root',
	database : 'myapi'
})
connection.connect();


router.post('/', function(req, res, next) {
	res.send("我是post传参中的根目录！");
});

router.post('/register', function(req, res, next) {
	
//	req.query get请求的数据
//	req.body post请求的数据

//"INSERT INTO `user`(`userid`, `username`, `ipone`, `password`) VALUES (NULL,'" +req.body.username+ "' ,"+req.body.ipone+",'"+req.body.password+"')"

	connection.query("INSERT INTO `user`(`userid`, `username`, `ipone`, `password`) VALUES (NULL,'" +req.body.username+ "' ,"+req.body.ipone+",'"+req.body.password+"')",function(error,resule){
		
		error ? res.send({
			code: 2001,
			meassage: "注册失败",
			data: error
		}) : res.send({
			code: 0,
			meassage: "注册成功"
//			data: result
		})
		
	})
	
//	res.send("我是register端口api！");
});

router.post('/login', function(req, res, next) {
	res.send("我是login端口api！");
//	SELECT * FROM `user` WHERE username = 'xiaohong'
});

module.exports = router;
