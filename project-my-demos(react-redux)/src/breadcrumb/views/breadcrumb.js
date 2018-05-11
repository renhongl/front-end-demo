
import React from 'react';
import Breadcrumb from 'antd/lib/breadcrumb';

export default ({bread}) => {
    return (
        <Breadcrumb style={{ margin: '12px 0' }}>
            {
                bread.split(',').map((v, k) => {
                    return (
                        <Breadcrumb.Item key={k}>{v}</Breadcrumb.Item>
                    )
                })
            }
        </Breadcrumb>
    )
}