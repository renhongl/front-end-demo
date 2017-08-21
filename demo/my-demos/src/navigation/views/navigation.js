
import React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import { view as DemoFilter } from '../../demoFilter';
import '../style.css';
import $ from 'jquery';

const Sider = Layout.Sider;
const SubMenu = Menu.SubMenu;
let index = 0;

export default class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.onCollapse = this.onCollapse.bind(this);
        this.changeDemo = this.changeDemo.bind(this);
        this.state = {
            collapsed: false,
            codePenList: [],
            animateList: []
        };
    }

    componentDidMount() {
        fetch('https://codepen.io/renhongl/pens/public/grid/?_cachebust=1503327056653').then(res=> {
            res.json().then(json => {
                let html = document.createElement('html');
                html.innerHTML = json.page.html;
                let list = html.querySelectorAll('.iframe-wrap');
                let tempArr = [];
                list.forEach((v) => {
                    let obj = {
                        url: v.children[0].getAttribute('href').replace('/pen/', '/full/'),
                        title: v.children[1].getAttribute('title')
                    }
                    tempArr.push(obj);
                })
                this.setState({
                    codePenList: tempArr
                })
            })
        })
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
            style={{ height: '100%', borderRight: 0 }}
            onClick={this.changeDemo}
            >
                <SubMenu key="gameList"  title={<span><Icon type="user"/>Codepen同步</span>}>
                    {
                        this.state.codePenList.map((v, k) => {
                            if (v.title.toLowerCase().indexOf(this.props.demoFilter.toLowerCase()) !== -1) {
                                return <Menu.Item key={index++} link={v.url}>{v.title}</Menu.Item>
                            }else {
                                return null;
                            }
                        })
                    }
                </SubMenu>
                <SubMenu key="animateList" title={<span><Icon type="laptop" />我的动画</span>}>
                    {
                        this.state.animateList.map((v, k) => {
                            if (v.title.toLowerCase().indexOf(this.props.demoFilter.toLowerCase()) !== -1) {
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
