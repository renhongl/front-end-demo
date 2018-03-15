

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        const style = {
            backgroundColor: `rgba(${this.props.config.backgroundColor},${this.props.config.opacity})`,
            color: this.props.config.fontColor,
        }
        return (
            <footer className='footer' style={style}>
                <div className='left'>
                    <Icon type="home" />
                </div>
                <div className='right'>
                    <Setting show={this.state.showSetting} config={this.props.config} changeBg={this.props.changeBg}/>
                    <Icon type="setting" onClick={this.toggleSetting}/>
                </div>
            </footer>
        )
    }
}

Footer.propTypes = {
    config: PropTypes.object.isRequired,
}

Footer.defaultProps = {
    config: {}
}