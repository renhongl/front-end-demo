
import React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import '../style.css';

const Header = Layout.Header;

export default () => {
    return (
        <Header className="header">
            <div className="logo"><img alt="logo" src="https://renhongl.github.io/images/panda.jpg"/>我的项目</div>
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={[window.location.origin + '/view']}
                style={{ lineHeight: '64px' }}
                onClick={(item) => {
                    window.location = item.key;
                }}
            >
                <Menu.Item key="https://renhongl.github.io/">博客</Menu.Item>
                <Menu.Item key="/view/about">关于</Menu.Item>
                <Menu.Item key='/view/download'>下载</Menu.Item>
                <Menu.Item key="/view">首页</Menu.Item>
            </Menu>
        </Header>
    )
}