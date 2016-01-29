var path = require('path'),
    fs = require('fs');

var staticExtns = [
    '.html','.js','.css','.jpg','.png','.xml','.json'
];
function isStatic(resourcePath){
    return staticExtns.indexOf(path.extname(resourcePath)) !== -1;
}

module.exports = function(resourcePath){
    return function(req, res, next){
        var resourceName = path.join(resourcePath, req.url.pathname);
         if (isStatic(resourceName)){
            if (!fs.existsSync(resourceName)){
                res.statusCode = 404;
                res.end();
                return;
            }
            var stream = fs.createReadStream(resourceName);
             stream.pipe(res);
/*
            stream.on('data', function(chunk){
                res.write(chunk);
            });
            stream.on('end', function(){
                res.end();
            });
*/
        } else {
            next();
        }
    };
}
