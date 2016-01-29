var http = require('http'),
    dataParser = require('./dataParser'),
    statcResourceRequestHandler = require('./staticResourceRequestHandler'),
    calculatorRequestHandler = require('./calculatorRequestHandler'),
    notFoundActionHandler = require('./notFoundActionHandler');

var server = http.createServer(function(req, res){
    dataParser(req, res);
    statcResourceRequestHandler(req, res);
    calculatorRequestHandler(req, res);
    notFoundActionHandler(req, res);
});
server.listen(8080);
console.log('server listening on port 8080');
