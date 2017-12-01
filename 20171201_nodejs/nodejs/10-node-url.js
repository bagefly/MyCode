var urlLib = require("url");

//urlLib.parse也是parse方法,可以看到query里面存储没有？的数据，可以通过传递参数true的方式得到对象格式

var json = urlLib.parse("http://www.ucai.com?user=admin&password=123456&age=22",true);

console.log(json);

