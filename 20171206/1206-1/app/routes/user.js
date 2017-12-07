var express = require("express");
var router = express.Router();
var User = require('../models/user');  //用户数据模型

router.get('/',function(req,res){
    var admin = new User({
        name: 'xiaoming',
        password: "123456",
        admin: true
    });

    admin.save(function(err){
        if(err){
            res.json({
                success: false,
                message: "管理员创建失败~"
            })
        }
        res.json({
            success: true,
            message: "管理员创建成功~"
        })
        
    })
})

module.exports = router;