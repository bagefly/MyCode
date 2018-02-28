var express = require('express');
var router = express.Router();

外层路由
www.guanjinlong.top/  //首页相关内容





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '已经5点！有人饿了么？' });
});


module.exports = router;
