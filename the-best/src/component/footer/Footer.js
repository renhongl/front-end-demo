

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
                    <span className='btn'><Icon type="home" onClick={this.props.toggleStore}/></span>
                </div>
                <div className='right'>
                    <span className='btn'><Icon type="setting" onClick={this.props.toggleSetting}/></span>
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