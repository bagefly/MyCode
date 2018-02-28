var express = require('express');
var router = express.Router();

router.get("/",function(req,res){
	res.send("我是商品的api接口！你信么~");
})

router.get("/getGoodsAll",function(req,res){
	res.send("所有商品的接口api");
})

router.get("/getGood",function(req,res){
	res.send("我是一个商品的api接口");
})

module.exports = router;