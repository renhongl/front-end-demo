
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
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            },
            {
                test: /\.(png|jpg)$/,
                use: ['url-loader?limit=10000&name=[name].[ext]&outputPath=app/images/&publicPath=app/images/']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    }
};