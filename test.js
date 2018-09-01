'use strict';

const
  findFile = require('.')
, assert = require('assert')
, fs = require('fs')
;

describe('testing findFile:', function () {
  it('find non existing file, should give error', function () {
    let randomString = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10); /* this is only pseudo-random but who cares? ;-) */
    /* make sure the random file does not exist! */
    try {
      fs.accessSync(`${randomString}.txt`);
      console.error(`${randomString}.txt file already exists! Exiting with error`);
      process.exit(1); // exit with error
    }
    catch (err) { /* it is OK, carry on */ }

    findFile('.', `${randomString}.txt`, function (err, path) {
      assert.ok(err instanceof Error);
      assert.equal(typeof path, 'undefined');
    });
  });
});
