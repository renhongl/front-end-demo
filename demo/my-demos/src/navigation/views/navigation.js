
import React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
const Sider = Layout.Sider;
const SubMenu = Menu.SubMenu;

export default () => {
    return (
        <Sider width={200}>
            <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            >
            <SubMenu key="sub1" title={<span><Icon type="user" />我的游戏</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
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