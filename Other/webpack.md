### 为什么要使用WebPack 

- 模块化，把复杂的程序细化为小的文件。
- 使用目前浏览器不支持的新特性。

### 什么是WebPack

打包模块的工具，将JavaScript模块和其他浏览器不能直接运行的拓展语言（Scss，TypeScript等）打包成浏览器可以运行的格式。

### Webpack, Grunt, Gulp

Webpack和另外两个没有太多可比性，Gulp/Grunt是一种用于优化前端开发流程的工具，WebPack是模块化的解决方案，不过WebPack的功能是可以替代它们的。

Grunt/Gulp是在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务，然后这个工具来自动为你完成。

WebPack把你的项目当做一个整体，通过一个主文件，找到项目所有的依赖文件，使用loaders处理它们，最后打包成一个浏览器可以识别的JavaScript文件。

WebPack的优点是，处理速度更快，更直接，能打包更多不同类型的文件。

### 开始使用WebPack

##### 安装
	//创建项目目录，并初始化
	mkdir webpack-demo
	cd webpack-demo
	npm init

	//全局安装
	npm install -g webpack

	//安装到项目目录
	npm install --save-dev webpack

##### 通过配置文件使用WebPack





