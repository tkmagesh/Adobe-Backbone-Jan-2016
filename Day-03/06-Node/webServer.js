var http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var calculator = require('./calculator');

var staticExtns = [
    '.html','.js','.css','.jpg','.png','.xml','.json'
];
function isStatic(resourcePath){
    return staticExtns.indexOf(path.extname(resourcePath)) !== -1;
}


var server = http.createServer(function(req, res){
    req.url = url.parse(req.url, true);
    var resourceName = path.join(__dirname, req.url.pathname);
    console.log(resourceName);
    if (isStatic(resourceName)){
        if (!fs.existsSync(resourceName)){
            res.statusCode = 404;
            res.end();
            return;
        }
        var stream = fs.createReadStream(resourceName);
        stream.on('data', function(chunk){
            res.write(chunk);
        });
        stream.on('end', function(){
            res.end();
        });
    } else if (req.url.pathname === '/calculator' && req.method === 'GET'){
        var operation = req.url.query.operation,
            n1 = parseInt(req.url.query.n1),
            n2 = parseInt(req.url.query.n2);
        var result = calculator[operation](n1,n2);
        res.write(result.toString());
        res.end();
    } else if (req.url.pathname === '/calculator' && req.method === 'POST'){
        var reqData = '';
        req.on('data', function(chunk){
            reqData += chunk;
        });
        req.on('end', function(){
            var data = qs.parse(reqData);
            var operation = data.operation,
                n1 = parseInt(data.n1),
                n2 = parseInt(data.n2);
            var result = calculator[operation](n1,n2);
            res.write(result.toString());
            res.end();
        })
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(8080);
console.log('server listening on port 8080');
