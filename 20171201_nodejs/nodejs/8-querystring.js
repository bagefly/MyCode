var querystring = require("querystring");

var json = querystring.parse("user=admin&password=12345");

console.log(json);