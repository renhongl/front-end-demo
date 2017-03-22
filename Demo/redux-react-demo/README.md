### Webpack + Redux + React + React Router

本来以为公司的项目结构比较复杂，使用react相关技术不能满足需求，但是在接触更多的react及相关技术之后，发现只要想得到的东西，都有工具去辅助，那些复杂的应用结构也能实现了。

#### React-Redux

在react中使用redux，可以使用react-redux库，它把所有的组件分为了两类：纯UI组件和容器组件。

纯UI组件： 

- 只有UI的呈现
- 没有状态
- 所有数据由props提供
- 不使用任何redux的API

容器组件：

- 复杂管理数据和业务逻辑，不负责UI呈现
- 带有内部状态
- 使用redux的API

