
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },

    devtool: 'inline-source-map',

    devServer: {
        port: 9090,
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        publicPath: '/',
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
            // {   
            //     // enforce: 'pre',//打包之前使用有些问题
            //     test: /\.js$/,
            //     use: ['eslint-loader'],
            //     exclude: /node_modules/
            // },
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
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: process.env.NODE_ENV === 'production'
        }),
    ]

};