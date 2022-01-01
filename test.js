'use strict';

const PathIterator = require('./PathIterator.js'),
  clog = console.log;

describe('testing findFile:', function () {
  it('find the tags files', function () {
    function findFile(path, searchFile, callback) {
      let pi = new PathIterator();
      pi.on('file', function (file, _stats) {
        if (file == searchFile) {
          callback(undefined, file);
        }
      });
      pi.on('error', callback);
      pi.iterate(path);
    }

    findFile('.', 'tags', function (err, file) {
      if (err) {
        clog('Error has occured');
        clog(err);
        return;
      }
      clog('File found at ' + file);
    });
  });
  it('how to test if there is no match?');
  it('path is wrong, should give error');
});
