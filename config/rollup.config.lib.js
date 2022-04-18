// rollup.config.lib.js
var multiEntry = require('rollup-plugin-multi-entry');
var utils = require('./utils.js');
var common = require('./rollup.js');

var plugins = [multiEntry(), common.getCompiler()];

var formatConfig = function () {
  var config = [];
  var dirs = utils.getDirs('src');
  dirs.forEach(function (item) {
    config.push({
      input: 'src/' + item,
      output: {
        file: 'dist/lib/' + item,
        format: 'es',
        name: item,
      },
      plugins: plugins,
    });
  });
  return config;
};

module.exports = formatConfig();
