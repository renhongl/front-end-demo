

import React from 'react';
import { view as Header } from '../header';
import Layout from 'antd/lib/layout';
import { view as DownloadList } from '../downloadList';

export default () => {
    return (
        <Layout className="container">
            <Header />
            <Layout className="main-content">
                <DownloadList />
            </Layout>
        </Layout>
    )
}