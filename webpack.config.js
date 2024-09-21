const path = require('path');

console.log('\nWebpack Alias:', path.resolve(__dirname, 'node_modules/@uswds/uswds/packages/uswds-core/src/js/index.js'));

module.exports = {
  resolve: {
    alias: {
      '@uswds/uswds': path.resolve(__dirname, 'node_modules/@uswds/uswds/packages/uswds-core/src/js/index.js'),
    }
  }
};