module.exports = function(req, res, next){
    console.log('writing 404');
    res.statusCode = 404;
    res.end();
    next();
}
