

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import './style.less';

export default class Footer extends Component{
    constructor(props) {
        super(props);
    }

    getMinDialogs() {
        let minDialogs = [];
        for (let p in this.props.config) {
            if (this.props.config[p].id &&this.props.config[p].status === 'min') {
                minDialogs.push(this.props.config[p]);
            }
        }
        return minDialogs;
    }

    render() {
        const style = {
            backgroundColor: `rgba(${this.props.config.backgroundColor},${this.props.config.opacity})`,
            color: this.props.config.fontColor,
        }
        const minDialogs = this.getMinDialogs().map( (v, k) => (
            <span className='btn' key={k} onClick={() => this.props.restoreDialog(v.id)}><Icon type={v.class}/></span>
        ));
        return (
            <footer className='footer' style={style}>
                <div className='left'>
                    <span className='btn'><Icon type="home" onClick={this.props.toggleStore}/></span>
                    {minDialogs}
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