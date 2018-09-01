'use strict';

const
  findFile = require('.')
, assert = require('assert')
;

describe('testing findFile:', function () {
  it('find non existing file, should give error', function () {
    findFile('.test', 'siema.txt', function (err, path) {
      if (err) {
        assert.ok(err instanceof Error);
      }
    });
  });
});
