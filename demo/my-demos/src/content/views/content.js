

import React from 'react';
import Layout from 'antd/lib/layout';
import '../style.css';

const Content = Layout.Content;

export default ({ demo }) => {
    return (
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <iframe src={demo} title="demo"></iframe>
        </Content>
    )
}