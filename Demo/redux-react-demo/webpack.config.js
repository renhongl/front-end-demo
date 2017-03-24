
const path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/bundle.js')
    },

    devtool: 'inline-source-map',

    devServer: {
        port: 9090,
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true
    },

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
                test: /\.jpg|png$/,
                use: ['url-loader']
            },
            {   
                // enforce: 'pre',//打包之前使用有些问题
                test: /\.js$/,
                use: ['eslint-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.js|jsx/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            importLoader: 1
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    }

};