
import React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import '../style.css';

const Search = Input.Search;
const Sider = Layout.Sider;
const SubMenu = Menu.SubMenu;


export default ({ changeDemo }) => {
    const gameList = [
        {
            id: 0,
            title: '贪吃蛇',
            url: '/view/project/snake/'
        },
        {
            id: 1,
            title: '打飞机',
            url: '/view/project/plane/'
        },
        {
            id: 2,
            title: '五子棋',
            url: '/view/project/chess/'
        },
        {
            id: 3,
            title: '收集星星',
            url: '/view/project/collect-star/'
        }
    ];
    return (
        <Sider width={200}>
            <Search className="navigation-search" placeholder="搜索项目"/>
            <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            onClick={(e) => {
                changeDemo(e.item.props.link);
            }}
            >
                <SubMenu key="sub1"  title={<span><Icon type="user"/>我的游戏</span>}>
                    {
                        gameList.map((v, k) => {
                            return <Menu.Item key={k} link={v.url}>{v.title}</Menu.Item>
                        })
                    }
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />我的动画</span>}>
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <Menu.Item key="9">链接1</Menu.Item>
                <Menu.Item key="10">链接2</Menu.Item>
                <Menu.Item key="11">链接3</Menu.Item>
                <Menu.Item key="12">链接4</Menu.Item>
            </Menu>
      </Sider>
    )
}