'use strict';

var through = require('through')

var write = function write(data) {
  var envArr = data.split('=')
  var envObj = {
    key: envArr[0],
    value: envArr[1]
  }
  this.emit('data', envObj)
}

var end = function end () {
  this.emit('end')
}

module.exports = through(write, end)

