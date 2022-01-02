const path = require('path');

module.exports = {
    mode: 'production', //개발용(development), 배포용(production)
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name]_bundle.js',
    },
};