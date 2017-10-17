var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var contenttype = {
  "css": "text/css",
  "gif": "image/gif",
  "html": "text/html",
  "ico": "image/x-icon",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "js": "text/javascript",
  "json": "application/json",
  "pdf": "application/pdf",
  "png": "image/png",
  "svg": "image/svg+xml",
  "swf": "application/x-shockwave-flash",
  "tiff": "image/tiff",
  "txt": "text/plain",
  "wav": "audio/x-wav",
  "wma": "audio/x-ms-wma",
  "wmv": "video/x-ms-wmv",
  "xml": "text/xml"
};

// 聊天数据
var gArrData = [];

var server = http.createServer(function(req, res) {
    var params = url.parse(req.url, true);

    if (params.pathname == '/ajax/ajaxtest') {
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        });
        res.write('hello, 我是来自后端的数据哦~');
        res.end();
    }else if(params.pathname == '/ajax/getCity'){
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        });
        res.write('[{"id":110100,"name":"北京市","regions":[{"id":110101,"name":"东城区"},{"id":110102,"name":"西城区"},{"id":110103,"name":"崇文区"},{"id":110104,"name":"宣武区"},{"id":110105,"name":"朝阳区"},{"id":110106,"name":"丰台区"},{"id":110107,"name":"石景山区"},{"id":110108,"name":"海淀区"},{"id":110109,"name":"门头沟区"},{"id":110111,"name":"房山区"},{"id":110112,"name":"通州区"},{"id":110113,"name":"顺义区"},{"id":110114,"name":"昌平区"},{"id":110115,"name":"大兴区"},{"id":110116,"name":"怀柔区"},{"id":110117,"name":"平谷区"},{"id":110228,"name":"密云县"},{"id":110229,"name":"延庆县"}]},{"id":440100,"name":"广州市","regions":[{"id":440103,"name":"荔湾区"},{"id":440104,"name":"越秀区"},{"id":440105,"name":"海珠区"},{"id":440106,"name":"天河区"},{"id":440111,"name":"白云区"},{"id":440112,"name":"黄埔区"},{"id":440113,"name":"番禺区"},{"id":440114,"name":"花都区"},{"id":440115,"name":"南沙区"},{"id":440116,"name":"萝岗区"},{"id":440183,"name":"增城市"},{"id":440184,"name":"从化市"}],"pinyin":"GuangZhouShi","hot":true}]');
        res.end();
    }  else if(params.pathname == '/ajax/chat'){
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        });
        if (params.query ) {
            var type = params.query.type;
            var sender = params.query.sender;
            var msg = params.query.msg;

			if (type == "send")
			{
				var obj = {
					name: sender,
					content: msg
				}
				gArrData.push(obj);
				res.write(JSON.stringify({"status": 0}));
			}
			else if (type == "query")
			{
				res.write(JSON.stringify(gArrData));
			}
        }
        res.end();
        
    } else if (params.pathname == '/ajax/getJSONP') {
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        });
        var data = {
            name: '王大锤',
            age: 30,
            sex: '男',
            married:false
        }
        if (params.query && params.query.callback) {
            var str = params.query.callback + '(' + JSON.stringify(data) + ')';
            res.write(str);
        } else {
            res.write(JSON.stringify(data));
        }
        res.end();
    }else if(params.pathname == '/ajax/checkname'){
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        });
        var names = ['张三','李四','王尼玛','奥巴马'];
        if (params.query && params.query.regname) {
            var name = params.query.regname;
                if(names.indexOf(name) != -1){
                    res.write('false');
                }else{
                    res.write('true');
                }
        }
        res.end();
        
    }else if(params.pathname == '/ajax/weibo'){
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        });
        var data = [{"id":15,"content":"小明10年前背井离乡，家乡人从此再也喝不到井水。","comtcnt":50,"likecnt":100,"username":"yintao"},{"id":15,"content":"VANS万斯官方大促专场","comtcnt":50,"likecnt":100,"username":"assafasd"},{"id":15,"content":"请说三条支撑你活下去的理由？因为我胡三六条，可是六条被人杠了……","comtcnt":95,"likecnt":298,"username":"福尔蘑菇"},{"id":15,"content":"有一只狼宝宝噢，它一 生下来不吃肉只吃素，它父母很担心啊。结果一天看到狼宝宝追一只兔子啦，父母很欣慰。然后狼宝宝抓住兔子说：把胡萝卜交出来！……","comtcnt":3,"likecnt":26,"username":"小窝"},{"id":15,"content":"从前有个捉迷藏社团， 他们的社长直到现在还没找到…","comtcnt":0,"likecnt":8,"username":"煎饼侠"}];
        res.write(JSON.stringify(data));
        res.end();
    }else if(params.pathname == '/ajax/pbl'){
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        });
        // var data = fs.readFileSync('./football.json');console.log(data);
        var data = require('./pbl.json');
        var output = {total:data.length};
        if (params.query && params.query.pageNo) {
            var page = params.query.pageNo;
            var pageCount = params.query.pageCount || 10;
            output.data = data.slice((page-1)*pageCount,page*pageCount);
            output.pageNo = page;
            output.pageCount = pageCount;
            
            res.write(JSON.stringify(output));
        }else{
            output.data = data;
            res.write(JSON.stringify(output));
        }
        res.end();
    }else if(params.pathname == '/ajax/football'){
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        });
        // var data = fs.readFileSync('./football.json');console.log(data);
        var data = require('./football.json');
        var output = {total:data.length};
        if (params.query && params.query.pageNo) {
            var page = params.query.pageNo;
            var pageCount = params.query.pageCount || 10;
            output.data = data.slice((page-1)*pageCount,page*pageCount);
            output.pageNo = page;
            output.pageCount = pageCount;
            
            res.write(JSON.stringify(output));
        }else{
            output.data = data;
            res.write(JSON.stringify(output));
        }
        res.end();
    }else if(params.pathname == '/ajax/person'){
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        });
        // var data = fs.readFileSync('./football.json');console.log(data);
        var data = require('./person.json');
        var output = {total:data.length};
        if (params.query && params.query.pageNo) {
            var page = params.query.pageNo;
            var pageCount = params.query.pageCount || 10;
            output.data = data.slice((page-1)*pageCount,page*pageCount);
            output.pageNo = page;
            output.pageCount = pageCount;
            
            res.write(JSON.stringify(output));
        }else{
            output.data = data;
            res.write(JSON.stringify(output));
        }
        res.end();
    }else if(params.pathname == '/ajax/news'){
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        });
        // var data = fs.readFileSync('./football.json');console.log(data);
        var data = require('./news.json');
        var output = {total:data.length};
        if (params.query && params.query.pageNo) {
            var page = params.query.pageNo;
            var pageCount = params.query.pageCount || 10;
            output.data = data.slice((page-1)*pageCount,page*pageCount);
            output.pageNo = page;
            output.pageCount = pageCount;
            
            res.write(JSON.stringify(output));
        }else{
            output.data = data;
            res.write(JSON.stringify(output));
        }
        res.end();
    }else{
        var pathname = params.pathname
        if (pathname.slice(-1) === "/") {
            pathname += 'index.html'; //默认取当前默认下的index.html
        }
        var realPath = path.join(process.cwd(), pathname);
        var ext = path.extname(realPath);
        ext = ext ? ext.slice(1) : 'unknown';
        fs.exists(realPath, function(exists) {
            if (!exists) {
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('This request URL' + pathname + ' was not found on this server.');
                res.end();
            } else {
                fs.readFile(realPath, 'binary', function(err, file) {
                    if (err) {
                        res.writeHead(500, {
                            'Content-Type': 'text/plain'
                        });
                        res.end(err);
                    } else {
                        var contentType = contenttype.types[ext] || 'text/plain';
                        res.writeHead(200, {
                            'Content-Type': contentType
                        });
                        res.write(file, 'binary');
                        res.end();
                    }
                });
            }
        });
    }
    
});
server.listen(8080,function(){
    console.log('server start at http://localhost:8080')
});
