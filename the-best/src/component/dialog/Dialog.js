

import React, { Component } from 'react';

import Draggable from '../../share/tool/Draggable';
import Resizable from '../../share/tool/Resizable';
import { Icon } from 'antd';
import './style.less';

export default class Dialog extends Component{
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.minDialog = this.minDialog.bind(this);
    }

    componentDidMount() {
        new Draggable({
            container: this.dialog,
        });
        new Resizable({
            container: this.dialog
        });
    }

    onClick() {
        let allDialog = document.querySelectorAll('.dialog');
        for(let dialog of allDialog) {
            dialog.style.zIndex = 10;
        }
        this.dialog.style.zIndex = 20;
    }

    closeDialog() {
        this.props.closeDialog(this.dialog.id);
    }

    minDialog() {
        this.props.minDialog(this.dialog.id);
    }

    render() {
        const width = window.innerWidth * 0.5;
        const height = window.innerHeight * 0.7;
        const style = {
            backgroundColor: `rgba(${this.props.config.backgroundColor},${this.props.config.opacity})`,
            color: this.props.config.fontColor,
            width: width,
            height: height,
            zIndex: 10,
            left: (window.innerWidth - width) * 0.5,
            top: (window.innerHeight - height) * 0.5
        }
        const styleHeader = {
            backgroundColor: `rgba(${this.props.config.backgroundColor},${this.props.config.opacity+0.1})`,
            color: this.props.config.fontColor,
        }
        return (
            <section 
                ref={dialog => this.dialog = dialog} 
                className={this.props.options.show ? 'dialog show' : 'dialog hide'} 
                style={style} 
                id={this.props.options.id}
                status={this.props.options.status}
            >
                <div className='dialog-header' style={styleHeader} onClick={this.onClick}>
                    {this.props.options.title}
                    <span className='dialog-close'><Icon type="close" onClick={this.closeDialog}/></span>
                    <span className='dialog-close'><Icon type="minus" onClick={this.minDialog}/></span>
                </div>
                <div className='dialog-content'>{this.props.children}</div>
            </section>
        )
    }
}