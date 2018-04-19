

import React, { Component } from 'react';
import { Icon, Tooltip } from 'antd';
import { application } from '../../share/config/globalConfig';
import { lang } from '../../share/config/lang';
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
        const { config, show } = this.props;
        const { backgroundColor, fontColor, language, opacity } = config;
        const style = {
            backgroundColor: `rgba(${backgroundColor},${opacity})`,
            color: fontColor,
        }
        const color = {
            color: fontColor,
        }
        const appList = application.map( (v, k) => (
            <Tooltip title={lang[language][v.id.toUpperCase()]} key={k}>
                <span dialog={v.id} className='iconSpan' onClick={this.showDialog} style={color}>
                    <Icon type={v.class}/>
                </span>
            </Tooltip>
        ))
        return (
            <section className={show ? 'store show' : 'store hide'} style={style}>
                {appList}
            </section>
        )
    }
}