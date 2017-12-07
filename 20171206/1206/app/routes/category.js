var express = require("express");
var router = express.Router();
var Category = require('../models/category');  //分类数据模型

//添加分类
router.post('/',function(req,res){
//	console.log("post 请求");
//	console.log(req.body.title);
	
	var title = req.body.title;
	
	var category = new Category({
		title: title
	})
	
	category.save(function(err){
		if(err){
			res.json({
				success: false,
				message: "添加分类失败"
			})
		}
		
		res.json({
				success: true,
				message: "添加分类成功~"
			})
		
	})
})
//查看分类
router.get('/',function(req,res){
	
	Category.find({},function(err,result){
		if(err){
			res.json({
				success: false,
				message: "查看分类失败"
			})
		}
		
		res.json({
			success: true,
			message: "查看分类成功",
			data: result
		})
		
	})
})
//更新分类
router.put('/',function(req,res){
	
	//解构赋值
	var {title,newTitle} = req.body;
	console.log(title,newTitle);
					//通过用户传递的title查找数据，把数据更新成newTitle
	Category.findOneAndUpdate({title:title},{title:newTitle}
	,function(err,result){
		if(err){
			res.json({
				success: false,
				message: "更改分类失败"
			})
		}
		
		res.json({
			success: false,
			message: "更改分类成功！"
		})
	})
	
})
//删除分类
router.delete('/',function(req,res){
	
	//接受用户传递要删除内容的title
	var {title} = req.body;
	
	Category.remove({title:title},function(err){
		if(err){
			res.json({
				success: false,
				message: "删除分类失败"
			})
		}
		
		res.json({
				success: true,
				message: "删除分类成功！"
			})
	})
	
})

module.exports = router;
