var pkg = require('../../../package');
var db = require('../../db');

var core = require('@gautamarora/core');
var header = require('@gautamarora/header');

var microapps = ['core', 'header'];

//pre-processing of the raw data based on the io response
function processData(req, res, cb) {
  res.data.photo = {};
  res.data.photo = res.data.db;
  cb(null, 'photo', req, res);
}

function mergeData(err, microapp, req, res) {
  if(Object.keys(res.data).length === microapps.length + 2) { //+1 for self, +1 for db in the data map
    processMergedData(req, res);
  }
}

//post-processing when you have data from all the modules
function processMergedData(req, res) {
  sendResponse(req, res);
}

function sendResponse(req, res) {
  core.renderTemplate(__dirname, 'photos', res.data, function (err, html) {
    if (err) return next(err);
    return res.send(html);
  });
}

module.exports = function(app) {
  //get package info
  app.get('/info/photos', function(req, res) {
    res.send({
      name: pkg.name,
      version: pkg.version,
      process: {
        title: process.title,
        pid: process.pid,
        version: process.version,
        arch: process.arch,
        platform: process.platform,
        memory: process.memoryUsage()
      },
      env: {
        NODE_ENV: process.env.NODE_ENV
      }
    });
  });
  
  app.get('/photos', function getData(req, res) {
    res.data = {};
    db.getAll('photo', function(err, data) {
      var _data = [];
      Object.keys(data).sort().forEach(function(d) { //descending sort
        _data.push(data[d]);
      });
      res.data.db = _data;
      processData(req, res, mergeData);
      core.processData('photo', req, res, mergeData);
      header.processData('photo', req, res, mergeData);
    });
  });
};