
import React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import { view as DemoFilter } from '../../demoFilter';
import '../style.css';

const Sider = Layout.Sider;
const SubMenu = Menu.SubMenu;


export default ({ changeDemo, demoFilter }) => {
    const gameList = [
        {
            id: 0,
            title: '贪吃蛇-休闲',
            url: '/project/snake/'
        },
        {
            id: 1,
            title: '打飞机-竞技',
            url: '/project/plane/'
        },
        {
            id: 2,
            title: '五子棋-休闲',
            url: '/project/chess/'
        },
        {
            id: 3,
            title: '收集星星-竞技',
            url: '/project/collect-star/'
        }
    ];
    return (
        <Sider width={200}>
            <DemoFilter />
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
                            if (v.title.indexOf(demoFilter) !== -1) {
                                return <Menu.Item key={k} link={v.url}>{v.title}</Menu.Item>
                            }else {
                                return null;
                            }
                        })
                    }
                </SubMenu>
                <SubMenu key="animateList" title={<span><Icon type="laptop" />我的动画</span>}>
                    {
                        gameList.map((v, k) => {
                            if (v.title.indexOf(demoFilter) !== -1) {
                                return <Menu.Item key={k + 4} link={v.url}>{v.title}</Menu.Item>
                            }else {
                                return null;
                            }
                        })
                    }
                </SubMenu>
                {
                        gameList.map((v, k) => {
                            if (v.title.indexOf(demoFilter) !== -1) {
                                return <Menu.Item key={k + 8} link={v.url}>{v.title}</Menu.Item>
                            }else {
                                return null;
                            }
                        })
                    }
            </Menu>
      </Sider>
    )
}