
import React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import '../style.css';
import { browserHistory  } from 'react-router';
import notification from 'antd/lib/notification';
import Icon from 'antd/lib/icon';
import Tooltip from 'antd/lib/tooltip';

const Header = Layout.Header;

export default class HeaderComp extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            this.openNotification();
        }, 500)
    }

    openNotification() {
        notification.open({
            message: '欢迎',
            description: '欢迎访问梁仁洪的网站，您可以从左侧导航栏选择想要查看的演示。',
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
        });
    }

    render() {
        return (
            <Header className="header">
                <div className="logo"><img alt="logo" src="https://renhongl.github.io/images/panda.jpg"/>梁仁洪的项目</div>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={[window.location.pathname]}
                    style={{ lineHeight: '64px' }}
                    onClick={(item) => {
                         if (item.key.indexOf('http') !== -1) {
                            window.location = item.key;
                         } else {
                            browserHistory.push(item.key);
                         }
                    }}
                >   
                    <Menu.Item key="https://github.com/renhongl/"><Tooltip title="前往Github地址" placement="bottom"><Icon type="github" style={{fontSize: '25px'}}/></Tooltip></Menu.Item>
                    <Menu.Item key="https://renhongl.github.io/">博客</Menu.Item>
                    <Menu.Item key="/view/about/">关于</Menu.Item>
                    <Menu.Item key='/view/download/'>下载</Menu.Item>
                    <Menu.Item key="/view/">首页</Menu.Item>
                </Menu>
            </Header>
        )
    }
}
