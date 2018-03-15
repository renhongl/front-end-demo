

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.less';

import { BackgroundImage } from '../backgroundImage';
import { BackgroundColor } from '../backgroundColor';

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
                <h3 className='setting-title' style={style}>The Best Setting</h3>
                <BackgroundImage changeBg={this.props.changeBg} color={this.props.config.fontColor}/>
                <BackgroundColor color={this.props.config.fontColor}/>
            </section>
        )
    }
}

Setting.propTypes = {
    show: PropTypes.bool.isRequired,
    config: PropTypes.object.isRequired,
}

Setting.defaultProps = {
    show: false,
    config: {},
}