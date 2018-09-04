'use strict';

const
  fs = require('fs')
;

function findFile(path, searchFile, callback) {
  // start the search
  statDirectory(path, isMatch);

  // Check for a match, given filepath and filename
  function isMatch(err, fpath, file) {
    if (err) return callback(err);
    fs.stat(fpath, function (err, stats) {
      if (err) return callback(err);
      if (stats.isFile() && file == searchFile) {
        return callback(null, fpath);
      }
      else if (stats.isDirectory()) {
        statDirectory(fpath, isMatch);
      }
    });
  }

  // Read and stat a directory
  // Read a path and call the callback for each file
  function statDirectory(path, callback) {
    fs.readdir(path, function (err, files) {
      if (err) return callback(err);
      files.forEach(function (file) {
        callback(null, path+'/'+file, file);
      });
    });
  };
};

module.exports = findFile;
