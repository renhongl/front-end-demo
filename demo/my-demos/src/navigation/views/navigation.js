
import React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import { view as DemoFilter } from '../../demoFilter';
import '../style.css';

const Sider = Layout.Sider;
const SubMenu = Menu.SubMenu;
let index = 0;
const gameList = [
    {
        title: '贪吃蛇-休闲',
        url: '/project/snake/'
    },
    {
        title: '打飞机-竞技',
        url: '/project/plane/'
    },
    {
        title: '五子棋-休闲',
        url: 'https://codepen.io/renhongl/full/owZWzv/'
    },
    {
        title: '收集星星-竞技',
        url: '/project/collect-star/'
    }
];

const animateList = [
    {
        title: '滑动导航',
        url: 'https://codepen.io/renhongl/full/owYvRo/'
    },
    {
        title: 'CSS3 Button',
        url: 'https://codepen.io/renhongl/full/ZyKjYV/'
    },
    {
        title: 'CSS3 loading',
        url: 'https://codepen.io/renhongl/full/EXKzrb/'
    },
    {
        title: '卡片',
        url: 'https://codepen.io/renhongl/full/vZGoJx/'
    },
    {
        title: 'CSS3 Tooltip',
        url: 'https://codepen.io/renhongl/full/QgKyrr/'
    }
]

export default class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.onCollapse = this.onCollapse.bind(this);
        this.changeDemo = this.changeDemo.bind(this);
        this.state = {
            collapsed: false,
        };
    }

    onCollapse(collapsed) {
        this.setState({ collapsed });
    }

    changeDemo(e) {
        this.props.changeDemo(e.item.props.link);
    }

    render() {
        return (
            <Sider 
            width={200}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
        >
            <DemoFilter />
            <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['0']}
            defaultOpenKeys={['gameList']}
            style={{ height: '100%', borderRight: 0 }}
            onClick={this.changeDemo}
            >
                <SubMenu key="gameList"  title={<span><Icon type="user"/>我的游戏</span>}>
                    {
                        gameList.map((v, k) => {
                            if (v.title.indexOf(this.props.demoFilter) !== -1) {
                                return <Menu.Item key={index++} link={v.url}>{v.title}</Menu.Item>
                            }else {
                                return null;
                            }
                        })
                    }
                </SubMenu>
                <SubMenu key="animateList" title={<span><Icon type="laptop" />我的动画</span>}>
                    {
                        animateList.map((v, k) => {
                            if (v.title.indexOf(this.props.demoFilter) !== -1) {
                                return <Menu.Item key={index++} link={v.url}>{v.title}</Menu.Item>
                            }else {
                                return null;
                            }
                        })
                    }
                </SubMenu>
            </Menu>
      </Sider>
        )
    }
}
