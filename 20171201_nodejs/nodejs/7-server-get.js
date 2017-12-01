var http = require("http");

var server = http.createServer(function(req,res){
    var GET = {};

    if(req.url.indexOf("?") != -1){
        var str = req.url.substr(2);

        var arr = str.split("&");

        for(var i = 0; i < arr.length; i++){
            var arr2 = arr[i].split("=");

            GET[arr[0]] = arr2[1];
        }
    }else{
        str = req.url;
    }

    console.log(str,GET);

    res.write("aaa");
    res.end();
})

server.listen(3000);