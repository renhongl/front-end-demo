

import React from 'react';
import { view as Header } from '../header';
import { view as Navigation } from '../navigation';
import { view as Breadcrumb } from '../breadcrumb';
import Layout from 'antd/lib/layout';
const Footer  = Layout.Footer;
const Content = Layout.Content;

export default () => {
    return (
        <Layout className="container">
            <Header />
            <Layout className="main-content">
                <Navigation/>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Breadcrumb />
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        <iframe src="https://renhongl.github.io/view/project/plane/"></iframe>
                    </Content>
                </Layout>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>
                React Home ©2016 Created by Liang Ren Hong
            </Footer>
        </Layout>
    )
}