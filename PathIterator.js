'use strict';

const fs = require('fs'),
  EventEmitter = require('events').EventEmitter,
  util = require('util');

const PathIterator = function () {};

// Augment with EventEmitter
util.inherits(PathIterator, EventEmitter);

// Iterate a path, emitting 'file' and 'directory' events
PathIterator.prototype.iterate = function (path) {
  const self = this;
  self.statDirectory(path, function (fpath, stats) {
    if (stats.isFile()) {
      self.emit('file', fpath, stats);
    } else if (stats.isDirectory()) {
      // self.emit('directory', fpath, stats);
      self.iterate(fpath);
    }
  });
};

// Read and stat a directory
PathIterator.prototype.statDirectory = function (path, callback) {
  const self = this;
  fs.readdir(path, function (err, files) {
    if (err) {
      return self.emit('error', err);
    }
    files.forEach(function (file) {
      let fpath = path + '/' + file;
      fs.stat(fpath, function (err, stats) {
        if (err) {
          self.emit('error', err);
        }
        callback(fpath, stats);
      });
    });
  });
};

module.exports = PathIterator;
