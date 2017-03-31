const fs = require('fs');
var path = process.argv[2];

fs.readFile(path, function(err,data) {
    var str = data.toString();
    var lines = str.split('\n');
    console.log(lines.length-1);
});