

import React, { Component } from 'react';
import { Icon } from 'antd';
import './style.less';

import { Setting } from '../setting';

export default class Footer extends Component{
    constructor(props) {
        super(props);
        this.toggleSetting = this.toggleSetting.bind(this);
        this.state = {
            showSetting: true
        }
    }

    toggleSetting() {
        debugger;
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
                    <Setting className={this.state.showSetting ? 'show' : 'hide'}/>
                    <Icon type="setting" onClick={this.toggleSetting}/>
                </div>
            </footer>
        )
    }
}