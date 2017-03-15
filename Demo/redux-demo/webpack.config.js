
const path = require('path');

module.exports = {
    entry: './app/index.js',

    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9090
    }
};