'use strict';

const findFile = require('.'),
  { argv } = require('process'),
  clog = console.log;

if (argv.length !== 4)
  return clog(
    'Not enough parameters. Need $path and $name_of_file_you_are_looking_for'
  );

findFile(argv[2], argv[3], (err, path) => {
  if (err) {
    clog('We have an error!');
    return clog(err);
  }
  clog(path);
});
