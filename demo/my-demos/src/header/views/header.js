
import React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
const Header = Layout.Header;

export default () => {
    return (
        <Header className="header">
            <div className="logo" />
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['/view']}
                style={{ lineHeight: '64px' }}
                onClick={(item) => {
                    window.location = item.key;
                }}
            >
                <Menu.Item key="/view/download">下载</Menu.Item>
                <Menu.Item key="/view/about">关于</Menu.Item>
                <Menu.Item key="/view">主页</Menu.Item>
            </Menu>
        </Header>
    )
}