var express = require("express");
var router = express.Router();
var Blog = require('../models/blog');

router.post('/',function(req,res){
    var {id,body} = req.body;

    console.log(id,body);

    Blog.findById(id,function(err,blog){
        if(err){
            res.json({
                success: false,
                message: "发布评论失败！"
            })
        }

        blog.comments.push({body});

        blog.save(function(err){
            if(err){
                res.json({
                    success: false,
                    message: "发布评论失败！"
                })
            }

            res.json({
                success: true,
                message: "发布评论成功！"
            })
        })
    })
});

module.exports = router;