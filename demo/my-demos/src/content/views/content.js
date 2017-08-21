

import React from 'react';
import Layout from 'antd/lib/layout';
import '../style.css';

const Content = Layout.Content;

export default class ContentComp extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.refs.iframe.onload = () => {
            const link = document.createElement('link');
            link.setAttribute('href', './assets/iframe.css');
            this.contentDocument && this.contentDocument.body.appendChild(link);
        }
    }

    render() {
        return (
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <iframe ref="iframe" src={this.props.demo} title="demo"></iframe>
            </Content>
        )
    }
}