// ES5 shims for Function.prototype.bind, Object.prototype.keys, etc.
require('core-js/es5');

const context = require.context('./src', true, /.test\.js$/)
context.keys().forEach(context)
