var core = require('@gautamarora/core');
var header = require('@gautamarora/header');
var self = require('./self');

module.exports.init = function(app, express) {
  console.log('photo app init');
  core.initSass(__dirname);
  core.init(app);
  header.init(app);
  self.init(app, express);
};