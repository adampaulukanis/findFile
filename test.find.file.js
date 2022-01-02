#!/usr/bin/env node

'use strict';

const findFile = require('.'),
  { argv } = require('process'),
  clog = console.log,
  cerr = console.error;

if (argv.length !== 4) {
  cerr('Usage: ./test.find.file <PATH> <FILE>');
  cerr('ERROR: expected 2 parameters');
  process.exit(1);
}

findFile(argv[2], argv[3], (err, path) => {
  if (err) {
    return cerr('ERROR: ', err);
  }
  clog(path);
});
