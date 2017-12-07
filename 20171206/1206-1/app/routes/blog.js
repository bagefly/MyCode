var express = require("express");
var router = express.Router();
var Blog = require('../models/blog'); 

//发布博客
router.post('/',function(req,res){
    var {title,body,author,tags,hidden,category} = req.body;

    console.log(title,body,author,tags,hidden,category);

    if(title.length < 3){
        res.json({
            success: false,
            message: "标题长度不能小于3"
        })
    }

    var tagsArray = tags.split(',');

    var tagsObjArray = [];

    tagsArray.forEach(function(v){
        tagsObjArray.push({title: v});
    })
    //生成实例
    var blog = new Blog({
        title: title,
        body: body,
        author: author,
        tags: tagsObjArray,
        hidden: hidden,
        category: category
    })
    //存储到数据库
    blog.save(function(err){
        if(err){
            res.json({
                success: false,
                message: "博文发布失败！"
            })
        }
        
        res.json({
                success: false,
                message: "博文发布成功~！"
            })
    })

})

//查询博客内容
router.get('/',function(req,res){
	
	//根据分类查找
	var {category} = req.query;
	
	var whereObj = {};  //如果没有传递数据，条件为空json
	
	//通过get传递category分类数据的时候触发
	if(category){
		var re = new RegExp('^'+ category +'$'); //用这方式写正则可以拼接字符串
		whereObj = { category: re }
	}
	
	Blog.find(whereObj,function(err,result){
		if(err){
			res.json({
				success: false,
				message: "查询博文失败！"
			})
		}
		//可以通过result里面data的长度判断数据有没有获取到！
		res.json({
				success: true,
				data: result
			})
	})
})

//删除博客内容
router.delete('/',function(req,res){

})

module.exports = router;