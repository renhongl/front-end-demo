

import React from 'react';
import { view as Header } from '../header';
import { view as Navigation } from '../navigation';
import { view as Breadcrumb } from '../breadcrumb';
import { view as Content } from '../content';
import Layout from 'antd/lib/layout';

export default () => {
    return (
        <Layout className="container">
            <Header />
            <Layout className="main-content">
                <Navigation/>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Breadcrumb />
                    <Content />
                </Layout>
            </Layout>
        </Layout>
    )
}