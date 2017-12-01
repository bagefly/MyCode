var http = require("http");

var server = http.createServer(function(req,res){
    console.log(req.url);

    switch (req.url){
        case "/1.html":
            res.write("11111111111");
            break;
        case "/2.html":
            res.write("22222222222");
            break;
        default:
            res.write("404.html");
            break;
    }
    res.end();
})

server.listen(3000);