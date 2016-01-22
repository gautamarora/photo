var fs = require('fs');
var path = require('path');

exports.getAll = function(pModule, cb) {
  var filePath = path.join(__dirname, pModule + '.json');
  fs.readFile(filePath, 'utf8', function(err, file) {
    if(err) { console.log(err); cb(err); }
    var data = JSON.parse(file);
    cb(null, data);
  });
};

exports.getOne = function(pModule, id, cb) {
  var filePath = path.join(__dirname, pModule + '.json');
  fs.readFile(filePath, 'utf8', function(err, file) {
    if(err) { console.log(err); cb(err); }
    var data = JSON.parse(file);
    data = data[id];
    cb(null, data);
  });
};