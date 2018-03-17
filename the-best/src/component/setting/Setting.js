

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.less';

import BackgroundImage from './BackgroundImage';
import BackgroundColor from './BackgroundColor';
import { BackgroundSwitch } from '../backgroundSwitch/index';
import BackgroundSwitchSetting from './BackgroundSwitchSetting';

export default class Setting extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            backgroundColor: `rgba(${this.props.config.backgroundColor},${this.props.config.opacity})`,
            color: this.props.config.fontColor,
        }
        return (
            <section className={this.props.show ? 'setting show' : 'setting hide'} style={style}>
                <h3 className='setting-title' style={style}>设置</h3>
                <BackgroundImage changeBg={this.props.changeBg} config={this.props.config}/>
                <BackgroundColor 
                    changeBgColor={this.props.changeBgColor} 
                    changeBgOpacity={this.props.changeBgOpacity} 
                    changeFontColor={this.props.changeFontColor}
                    config={this.props.config}
                />
                <BackgroundSwitchSetting toggleSwitchBg={this.props.toggleSwitchBg} config={this.props.config}/>
            </section>
        )
    }
}

Setting.propTypes = {
    show: PropTypes.bool.isRequired,
    config: PropTypes.object.isRequired,
    changeBg: PropTypes.func,
}

Setting.defaultProps = {
    show: false,
    config: {},
}