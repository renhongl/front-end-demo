

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import { lang } from '../../share/config/lang';

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

    render() {
        const { config, toggleSwitchBg } = this.props;
        const { fontColor, backgroundColor, opacity, switchBg, language } = config;
        const style = {
            color: fontColor
        }
        const btnStye = {
            'backgroundColor': `rgba(${backgroundColor},${opacity})`
        }
        return (
            <section className='background-switch common-setting'>
                <h4 onClick={this.toggleList} style={style}>{lang[language]['BACKGROUND-AUTO-SWITCH']}</h4>
                <ul className={this.state.showList ? 'show' : 'hide'}>
                    <li><span className='key'>{lang[language]['BACKGROUND-SWITCH']}:</span> <Switch onChange={toggleSwitchBg} style={switchBg ? btnStye : {}}/></li>
                </ul>
            </section>
        )
    }
}

