

import React, { Component } from 'react';
import { Icon } from 'antd';
import './style.less';

export default class Footer extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className='footer'>
                <Icon type="setting" />
            </footer>
        )
    }
}