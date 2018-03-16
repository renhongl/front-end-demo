

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import './style.less';

export default class Footer extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            backgroundColor: `rgba(${this.props.config.backgroundColor},${this.props.config.opacity})`,
            color: this.props.config.fontColor,
        }
        return (
            <footer className='footer' style={style}>
                <div className='left'>
                    <Icon type="home" onClick={this.props.toggleStore}/>
                </div>
                <div className='right'>
                    <Icon type="setting" onClick={this.props.toggleSetting}/>
                </div>
            </footer>
        )
    }
}

Footer.propTypes = {
    config: PropTypes.object.isRequired,
    toggleSetting: PropTypes.func,
}

Footer.defaultProps = {
    config: {}
}