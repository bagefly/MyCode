var express = require("express");
var app = express();
var router = express.Router();
var User = require('../models/user');  //用户数据模型

var jwt = require('jsonwebtoken'); // 用来创建和确认用户信息
var config = require('../../config');  //找到config.js文件
app.set('superSecret',config.secret);  //超级密码

//登录验证，生成token
router.post('/',function(req,res){
	
	//通过模型去找数据库中有没有配置的用户名
	User.findOne({name: req.body.name},function(err,result){
		if(err){
			res.json({
				success: false,
				message: "登录失败"
			})
		}
		
		if(!result){
			//没有找到用户名
			res.json({
				success: false,
				message: "登录失败~用户名没有找到！"
			})
		}else if(result.password != req.body.password){
			res.json({
				success: false,
				message: "登录失败~密码错误！"
			})
		}else{
			//成功后，生成token
			var token = jwt.sign({name: 'foo'},app.get('superSecret'));
			
			res.json({
				success: true,
				message: "登录成功~！",
				token: token
			})
			
		}
		
	})
	
	
})



module.exports = router;