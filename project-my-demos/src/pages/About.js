

import React from 'react';
import { view as Header } from '../header';
import Layout from 'antd/lib/layout';

export default () => {
    return (
        <Layout className="container">
            <Header />
            <Layout className="main-content">
                About coming soon!
            </Layout>
        </Layout>
    )
}