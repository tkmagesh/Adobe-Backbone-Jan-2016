var http = require('http'),
    path = require('path'),
    dataParser = require('./dataParser'),
    statcResourceRequestHandler = require('./staticResourceRequestHandler'),
    calculatorRequestHandler = require('./calculatorRequestHandler'),
    notFoundActionHandler = require('./notFoundActionHandler'),
    app = require('./app');

app.use(dataParser);
app.use(statcResourceRequestHandler(path.join(__dirname, 'public')));
app.use(calculatorRequestHandler);
app.use(notFoundActionHandler);

http.createServer(app).listen(8080);
console.log('server listening on port 8080');
