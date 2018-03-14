

import React, { Component } from 'react';
import { Icon } from 'antd';
import './style.less';

import { Setting } from '../setting';

export default class Footer extends Component{
    constructor(props) {
        super(props);
        this.toggleSetting = this.toggleSetting.bind(this);
        this.state = {
            showSetting: false
        }
    }

    toggleSetting() {
        this.setState({
            showSetting: !this.state.showSetting
        });
    }

    render() {
        return (
            <footer className='footer'>
                <div className='left'>
                    <Icon type="home" />
                </div>
                <div className='right'>
                    <Setting show={this.state.showSetting}/>
                    <Icon type="setting" onClick={this.toggleSetting}/>
                </div>
            </footer>
        )
    }
}