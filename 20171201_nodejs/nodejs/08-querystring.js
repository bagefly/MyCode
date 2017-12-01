var querystring = require("querystring");


var json = querystring.parse("user=admin&password=123456");

console.log(json);
