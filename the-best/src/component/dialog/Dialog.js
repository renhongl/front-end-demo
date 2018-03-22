

import React, { Component } from 'react';

import { Draggable } from '../../share/mr/mr';
import { Icon } from 'antd';
import { lang } from '../../share/config/lang';
import './style.less';

export default class Dialog extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        new Draggable({
            container: this.dialog,
            dragZone: '.dialog-header'
        });
    }

    onClick = () => {
        let allDialog = document.querySelectorAll('.dialog');
        for(let dialog of allDialog) {
            dialog.style.zIndex = 10;
        }
        this.dialog.style.zIndex = 20;
    }

    closeDialog = () => {
        this.props.closeDialog(this.dialog.id);
    }

    minDialog = () => {
        this.props.minDialog(this.dialog.id);
    }

    render() {
        const { config, options } = this.props;
        const { backgroundColor, opacity, fontColor, language } = config;
        const { show, id, status } = options;
        const width = window.innerWidth * 0.5;
        const height = window.innerHeight * 0.7;
        const style = {
            backgroundColor: `rgba(${backgroundColor},${opacity})`,
            color: fontColor,
            width: width,
            height: height,
            zIndex: 10,
            left: (window.innerWidth - width) * 0.5,
            top: (window.innerHeight - height) * 0.5
        }
        const styleHeader = {
            // backgroundColor: `rgba(${backgroundColor},${opacity})`,
            color: fontColor,
        }
        return (
            <section 
                ref={dialog => this.dialog = dialog} 
                className={show ? 'dialog show' : 'dialog hide'} 
                style={style} 
                id={id}
                status={status}
                onClick={this.onClick}
            >
                <div className='dialog-header' style={styleHeader} >
                    <span className='title'>{lang[language][id.toUpperCase()]}</span>
                    <span className='dialog-close'><Icon type="close" onClick={this.closeDialog}/></span>
                    <span className='dialog-close'><Icon type="minus" onClick={this.minDialog}/></span>
                </div>
                <div className='dialog-content'>{this.props.children}</div>
            </section>
        )
    }
}