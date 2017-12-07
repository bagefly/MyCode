var express = require("express");
var router = express.Router();
var Blog = require('../models/blog');  //博客数据模型

//发布博客
router.post('/',function(req,res){
	//解构赋值
	var {title,body,author,tags,hidden,category} = req.body;
	
	console.log(title,body,author,tags,hidden,category);
	
	if(title.length < 3){
		res.json({
			success: false,
			message: "标题长度不能小于3"
		})
	}
	
	//tags标签 格式应该是对象数组
	//把标签内容分割数组格式 node,angular,js  =》 ["node","angular","js"]
	var tagsArray = tags.split(',');
	
	//新建一个空数组，用来放对象
	var tagsObjArray = [];
	
	//通过遍历方式，把标签内容放入对象里面，通过push方式放入数组
	tagsArray.forEach(function(v){
		tagsObjArray.push( {title: v } );
//		循环中{title: node } {title: angular }   {title: js }
	})
	
	console.log(tagsObjArray);
	
	res.json({
			message: "测试下post"
		})
})

//查看博客内容
router.get('/',function(req,res){
	
})

//删除博客内容
router.delete('/',function(req,res){
	
})


module.exports = router;