
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
        url: '/project/chess',
        title: '五子棋'
    },
    {
        url: '/project/snake',
        title: '贪吃蛇'
    },
    {
        url: '/project/plane',
        title: '打飞机'
    },
    {
        url: '/project/collect-star',
        title: '收集星星'
    }
];

const animationList = [
    {
        url: 'https://codepen.io/renhongl/full/QgKyrr',
        title: '提示框'
    },
    {
        url: 'https://codepen.io/renhongl/full/vZGoJx',
        title: '卡片展示'
    },
    {
        url: 'https://codepen.io/renhongl/full/owYvRo',
        title: '滑动翻页'
    },
    {
        url: 'https://codepen.io/renhongl/full/gRwbyX',
        title: '轮播'
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
        this.props.changeBread(e.item.props.bread);
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
            style={{ height: '100%', borderRight: 0 }}
            onClick={this.changeDemo}
            >
                <SubMenu key="gameList"  title={<span><Icon type="user"/><span>游戏</span></span>}>
                    {
                        gameList.map((v, k) => {
                            if (v.title.toLowerCase().indexOf(this.props.demoFilter.toLowerCase()) !== -1) {
                                return <Menu.Item key={index++} link={v.url} bread={'游戏,' + v.title}>{v.title}</Menu.Item>
                            }else {
                                return null;
                            }
                        })
                    }
                </SubMenu>
                <SubMenu key="animateList" title={<span><Icon type="laptop" /><span>动画</span></span>}>
                    {
                        animationList.map((v, k) => {
                            if (v.title.toLowerCase().indexOf(this.props.demoFilter.toLowerCase()) !== -1) {
                                return <Menu.Item key={index++} link={v.url} bread={'动画,' + v.title}>{v.title}</Menu.Item>
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
