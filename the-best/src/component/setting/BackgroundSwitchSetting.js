

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';

export default class BackgroundSwitchSetting extends Component{
    constructor(props){
        super(props);
        this.state = {
            showList: false
        }
    }

    toggleList = () => {
        this.setState({
            showList: !this.state.showList
        });
    }

    componentDidMount() {
        
    }

    render() {
        const style = {
            color: this.props.config.fontColor
        }
        const btnStye = {
            'backgroundColor': `rgba(${this.props.config.backgroundColor},${this.props.config.opacity})`
        }
        return (
            <section className='background-switch common-setting'>
                <h4 onClick={this.toggleList} style={style}>背景自动切换</h4>
                <ul className={this.state.showList ? 'show' : 'hide'}>
                    <li><span className='key'>背景切换:</span> <Switch onChange={this.props.toggleSwitchBg} style={this.props.config.switchBg ? btnStye : {}}/></li>
                </ul>
            </section>
        )
    }
}

