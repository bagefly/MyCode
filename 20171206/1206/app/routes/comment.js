var express = require("express");
var router = express.Router();
var Blog = require('../models/blog');  //博客数据模型

router.post('/',function(req,res){
	//解构赋值
	var {id,body} = req.body;
	
	console.log(id,body);
	
	Blog.findById(id, function(err,blog){
		if(err){
			    res.json({
				success:false,
				message:"发布评论失败！"
				})
		}
		
		blog.comments.push({body});  //往博客的评论中添加了一条数据是对象格式的数据
		
		blog.save(function(err){
			if(err){
				 res.json({
					success: false,
					message: "发布评论失败"
				})
			}
			
			res.json({
					success: true,
					message: "发布评论成功"
				})
			
		})
		
	})
	
	
})



module.exports = router;