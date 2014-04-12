env-parser
==========

Streaming environment variable parser

Transform module to handle single properly formed key=value pairs and create
javascript objects from them. Will split on first = and remove quotation from
value if present.

## Examples

Require module

```js
var envParser = require('env-parser')()
```

Listen for data events
```js
envParser.on('data', function (envObjec) {
  //do something with env object which will look like
  // { key: 'ENV_KEY', value: 'some value' }
})
```

Write env data
```js
envParser.write('ENV_KEY="some value"')

//or

envParser.write('ENV_KEY=some value')
```
