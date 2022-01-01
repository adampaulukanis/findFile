'use strict';

const pathModule = require('path');
const PathIterator = require('./PathIterator.js');

function findFile(path, searchFile, callback) {
  let pi = new PathIterator();
  pi.on('file', function (file, _stats) {
    if (pathModule.basename(file) === searchFile) {
      callback(undefined, file);
    }
  });
  pi.on('directory', function (path, _stats) {
    findFile(path, searchFile, callback);
  });
  pi.on('error', callback);

  pi.iterate(path); // start it
}

module.exports = findFile;
