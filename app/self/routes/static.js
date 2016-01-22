var path = require('path');

module.exports = function(app, express) {
  var normalizedPath = path.join(__dirname, '..', '..', '..', 'static');
  app.use('/photo/static', express.static(normalizedPath));
};