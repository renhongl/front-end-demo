

import React, { Component } from 'react';
import { Icon, Tooltip } from 'antd';
import { application } from '../../share/config/globalConfig';
import './style.less';

export default class Store extends Component{
    constructor(props) {
        super(props);
    }

    showDialog = (e) => {
        let name = e.currentTarget.getAttribute('dialog');
        this.props.showDialog(name);
        this.props.toggleStore();
    }

    render() {
        const style = {
            backgroundColor: `rgba(${this.props.config.backgroundColor},0.8)`,
            color: this.props.config.fontColor,
        }
        const appList = application.map( (v, k) => (
            <Tooltip title={v.title} key={k}>
                <span dialog={v.id} className='iconSpan' onClick={this.showDialog}>
                    <Icon type={v.class}/>
                </span>
            </Tooltip>
        ))
        return (
            <section className={this.props.show ? 'store show' : 'store hide'} style={style}>
                {appList}
            </section>
        )
    }
}