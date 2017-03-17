### Webpack2.0 + Redux

有人说：前端技术每隔18到24个月，就会难一倍。这也是我学习redux的感慨！
新技术的不断出现，只有转变思想，内心里接受它，才能更好地去学习它。今天要说的两个新技术，工作中没有用到，只有自己的项目少量涉及，但之前都学得不全面。最近全面学习了下，在这里记下一些自己觉得的难点。

#### Webpack
首先说一下webpack,webpack是前端资源模块化管理和打包工具，它可以将任何形式的资源都视为一个模块，就像js文件一样引入到代码中，然后打包成浏览器可以识别的代码。

我们通常是用配置文件的方式来使用webpack，这样比较清晰方便。下面是我在学习redux时的一个配置：

    
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

配置不是很齐全，但是已经可以很方便的使用，在项目中的css, json, image, html等资源都可以通过loader的转换，成为一个模块，使用import引入。这里还有一些其他的配置，比如devServer，在安装了webpack-dev-server依赖后，可以使用它非常方便的运行项目，它可以使模块热加载，每次更改代码后，回自动打包并刷新浏览器，开发时非常的方便。

还有其他一些插件，这里没有涉及，学习之后再补充。

#### Redux

Redux的设计思想: 

1. Web 应用是一个状态机，视图与状态是一一对应的。
2. 所有的状态，保存在一个对象里面。

就是说整个应用只有一个Store，一个数据的容器，在每个时刻的数据集合是一个State，每当用户操作View的时候，会触发一个Action，Store收到一个Action，会处理旧的State，然后返回新的State，State变化之后，就执行更新View的函数，这样就实现了View的自动渲染。

Redux一个比较难的地方，就是进行异步操作的时候，异步操作时，可以使用中间件，本来store.dispatch方法的参数只能是对象，在使用redux-thunk中间件之后，可以给store.dispatch传入函数，这个函数可以在进行异步操作之后，再发出最终的一个Action，这样就实现了异步操作。


