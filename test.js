'use strict';

const findFile = require('.'),
  assert = require('assert'),
  clog = console.log;

describe('testing findFile:', function () {
  it('find the index.js files', function (done) {
    findFile('.', 'index.js', function (err, file) {
      if (err) {
        clog('Error has occured');
        clog(err);
        return;
      }
      assert(file);
      done();
    });
  });
  it('how to test if there is no match?');
  it('path is wrong, should give error');
});
