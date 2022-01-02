'use strict';

const pathModule = require('path');
const PathIterator = require('./PathIterator.js');

//let foundFiles = [];

function findFile(path, searchFile, callback) {
  let pi = new PathIterator();
  pi.on('file', function (file, _stats) {
    if (pathModule.basename(file) === searchFile) {
      callback(undefined, file);
      //foundFiles.push(file);
    }
  });

  pi.on('error', callback);

  pi.iterate(path); // start it
}

module.exports = findFile;
