'use strict';

const
  findFile = require('.')
, assert = require('assert')
, fs = require('fs')
;

describe('testing findFile:', function () {
  it('find the index.js file', function (done) {
    /* There will be more then one match! */
    findFile('.', 'index.js', function (err, path) {
      assert.equal(err, null);
      assert.ok(path, './index.js');
    });
    done();
  });
  it('how to test if there is no match?', function () {
    findFile('.', 'misiaki.txt', function (err, path) {
      assert(false);
      /* this code is broken */
      console.log({err: err, path: path});
      assert.equal(err, null);
      assert.equal(path, null);
    });
  });
  it('path is wrong, should give error', function (done) {
    findFile('.xx', 'sssindex.js', function (err, path) {
      assert.ok(err instanceof Error);
      assert.equal(path, null); // path should be empty; file not found
      done();
    });
  });
});
