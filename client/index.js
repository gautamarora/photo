var core = require('@gautamarora/core');
var header = require('@gautamarora/header');
var self = require('./self');

module.exports.init = function() {
  core.init();
  header.init();
  self.init();
}();