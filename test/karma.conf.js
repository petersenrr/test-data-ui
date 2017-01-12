var path = require('path');
var basePath = path.resolve(__dirname, '../');
var masterConf = require(path.join(basePath, 'node_modules/frontier-build-tools/test/karma.config'));

module.exports = function (config) {
  masterConf(config, {
    browsers: ["PhantomJS"],
    basePath: basePath,
    files: [
      'test/client/test.js'

      // add files here to test
    ]
  });
};