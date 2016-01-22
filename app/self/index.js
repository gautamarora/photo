var core = require('@gautamarora/core');
var header = require('@gautamarora/header');

module.exports.init = function (app, express) {
  console.log('photo self init');
  core.registerRoutes(__dirname, 'routes', app, express); //express routes
  core.registerPartials(__dirname, 'partials', 'photo'); //handlebars partials
  header.setInitialState({"sidebar":{"component": "photo", "name": "photos", "url":"/photos"}});
};