var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('我是用户的内容');
});

router.get('/register', function(req, res, next) {
//res.send({
//	code : 0,
//	message: "注册成功",
//	data:{
//		id : 100,
//		good_id: 1231241
//	}
//});

//做个判断，可用if，switch
var info = {};
if(!req.query.username){
	  info = {
	  	code: 2001,
	  	message:"注册失败，未传入用户名！"
	  }
}else if(req.query.username == "小明"){
	  info = {
	  	code: 2002,
	  	message:"注册失败，用户名重复！"
	  }
}else{
		info = {
	  	code: 0,
	  	message:"注册成功！",
	  	data:{
	  		userid: 1,
	  		user_name: "小华",
	  		user_age: 22
	  	}
	  }
}

res.send(info);
});

module.exports = router;
