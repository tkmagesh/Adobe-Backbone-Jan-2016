var fs = require('fs');
var stream = fs.createReadStream('test.txt', {encoding : 'utf8'});
stream.pipe(process.stdout);
/*
var readCount = 0;
stream.on('data', function(fileChunk){
    ++readCount;
    console.log(fileChunk);
});
stream.on('end', function(){
    console.log('job done with ', readCount, ' readCount');
})
*/
