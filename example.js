'use strict';

var envWriter = require('env-writer')
  , envParser = require('./index.js')

envParser.pipe(envWriter)

envParser.write('ENV=development');
envParser.write('USER=bob');
envParser.write('PASS=test');

console.log(process.env.ENV)
console.log(process.env.USER)
console.log(process.env.PASS)
