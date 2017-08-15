
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
            theme="dark"
            defaultSelectedKeys={['0']}
            defaultOpenKeys={['gameList']}
            style={{ height: '100%', borderRight: 0 }}
            onClick={(e) => {
                changeDemo(e.item.props.link);
            }}
            >
                <SubMenu key="gameList"  title={<span><Icon type="user"/>我的游戏</span>}>
                    {
                        gameList.map((v, k) => {
                            return <Menu.Item key={k} link={v.url}>{v.title}</Menu.Item>
                        })
                    }
                </SubMenu>
                <SubMenu key="animateList" title={<span><Icon type="laptop" />我的动画</span>}>
                    {
                        gameList.map((v, k) => {
                            return <Menu.Item key={k + 5} link={v.url}>{v.title}</Menu.Item>
                        })
                    }
                </SubMenu>
                {
                        gameList.map((v, k) => {
                            return <Menu.Item key={k + 10} link={v.url}>{v.title}</Menu.Item>
                        })
                    }
            </Menu>
      </Sider>
    )
}