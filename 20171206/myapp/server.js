//导入模块
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken'); // 用来创建和确认用户信息

//导入config和User的内容
var config = require('./config');
var User = require('./app/models/user');

//配置文件
var port = process.env.PORT || 8080; //设置端口，如果你不传递端口，那么8080
mongoose.connect(config.database); //连接数据库
app.set('superSecret',config.secret);  //设置app的超级密码--用来加密生成token

//用body parser 来解析post和url信息中的参数
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 使用 morgan 将请求日志打印到控制台
app.use(morgan('dev'));


//路由
//================

app.get('/',function(req,res){
	res.send('我是基础路由的内容！');
})

app.get('/setup',function(req,res){
	
	var nick = new User({
		name: '鹏涛',
		password: 'pt123456',
		admin: true
	});
	
	nick.save(function(err){
		if(err) throw err;
		
		console.log('数据存入！请查收~');
		res.json({success: true});
	});
	
});
//================
//API路由
var router = express.Router();  //这条语句的后面才能使用router

//登录后可以得到token，认证登录接口
router.post('/login',function(req,res){
	
	//通过req.body.name用户传递的数据，在mongoDB数据库中查找一条内容
	User.findOne({name: req.body.name},function(err,result){
		if(err) throw err;
		
		if(!result){
			res.json({
				success: false,
				massage: "认证失败，用户名找不到！"
			});
		}else if(result.password != req.body.password){
			res.json({
				success: false,
				massage: "认证失败，密码错误~！"
			});
		}else {
			
			//生成token
			var token = jwt.sign({name: 'foo'},app.get('superSecret'));
			
			//把数据发送给用户
			res.json({
				success: true,
				massage: "恭喜~登录成功~",
				token: token
			})
		}
	})
	
})

//测试 ： 如果请求写在中间件前面会有些bug出现
router.post('/ccc',function(req,res){
	
	User.find({},function(err,result){
		res.json(result);
	})
	
})

//中间件时候使用  需要在其他路由的上面
//认证token
router.use(function(req,res,next){
	//找token  从get请求 post请求或者头信息
	var token = req.query.token || req.body.token || req.headers['x-access-token'];
	
	//判断token有没有
	if(token){
		
//		确认有 
		//解码
		jwt.verify(token,app.get('superSecret'),function(err,decoded){
			if(err){
				return res.json({
					success: false,
					message: "token信息错误"
				})
			}else{
				
				//如果token没问题，把解码后的信息保存到请求中，提供给后面路由使用
				req.decoded = decoded;  //存储token到req中
				next();  //下一步
			}
		})
		
	}else {
		//如果没有token，返回错误信息
		return res.status(403).send({
			success: false,
			message: "没有提供token"
		})
	}
	
})

router.get('/',function(req,res){
	res.json({message:"天气很冷！多加衣服~~"});
})

router.get('/users',function(req,res){
	
	User.find({},function(err,result){
		res.json(result);
	})
	
})

router.post('/aaa',function(req,res){
	
	User.find({},function(err,result){
		res.json(result);
	})
	
})



//应用router，前缀加上/api
app.use('/api',router);

//================

app.listen(port);
console.log('正常启动了~');

