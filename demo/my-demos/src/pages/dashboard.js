
import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Input from 'antd/lib/input';
const Search  = Input.Search;
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.demos = ['https://renhongl.github.io/view/project/snake/', 'https://renhongl.github.io/view/project/plane/', 'https://renhongl.github.io/view/project/chess/', 'https://renhongl.github.io/view/project/collect-star/'];
        this.state = {
            collapsed: false,
            currentDemo: '',
            currentDemoName: ''
        };
        this.changeDemo = this.changeDemo.bind(this);
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    changeDemo(e) {
        this.setState({
            currentDemo: this.demos[e.key],
        });
        this.setState({
            currentDemoName: e.item.props.children
        });
    }

    render() {
        return (
        <Layout className="container">
            <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            >
            <Search className="search" style={{width: '80%'}}/>
            <Menu theme="dark" defaultSelectedKeys={['-1']} mode="inline" onClick={this.changeDemo}>
                <SubMenu
                key="sub1"
                title={<span><Icon type="star" /><span>我的游戏</span></span>}
                >
                <Menu.Item key="0">贪吃蛇</Menu.Item>
                <Menu.Item key="1">打飞机</Menu.Item>
                <Menu.Item key="2">五子棋</Menu.Item>
                <Menu.Item key="3">收集星星</Menu.Item>
                </SubMenu>
            </Menu>
            </Sider>
            <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px', height: '100%'}}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>我的游戏</Breadcrumb.Item>
                <Breadcrumb.Item>{this.state.currentDemoName}</Breadcrumb.Item>
                </Breadcrumb>
                <iframe src={this.state.currentDemo}></iframe>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                My Demos ©2017 Created by Liang Ren Hong
            </Footer>
            </Layout>
        </Layout>
        );
    }
}