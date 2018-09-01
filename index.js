'use strict';

const
  fs = require('fs')
;

function findFile(path, searchFile, callback) {
  fs.readdir(path, function (err, files) {
    if (err) {
      return callback(err);
    }
    files .forEach(function (file) {
      fs.stat(path+'/'+file, function (err, stats) {
        if (err) {
          return callback(err);
        }
        if (stats.isFile() && file == searchFile) {
          callback(undefined, path+'/'+file);
        }
        else if (stats.isDirectory()) {
          findFile(path+'/'+file, searchFile, callback);
        }
      });
    });
  });
};

module.exports = findFile;
