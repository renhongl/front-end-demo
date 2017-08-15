
import React from 'react';
import Breadcrumb from 'antd/lib/breadcrumb';

export default () => {
    return (
        <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>我的游戏</Breadcrumb.Item>
            <Breadcrumb.Item>打飞机</Breadcrumb.Item>
        </Breadcrumb>
    )
}