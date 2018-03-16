

import React, { Component } from 'react';

import Draggable from '../../share/tool/Draggable';
import Resizable from '../../share/tool/Resizable';
import './style.less';

export default class Dialog extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        new Draggable({
            container: this.dialog,
        });
        new Resizable({
            container: this.dialog
        });
    }

    render() {
        const style = {
            backgroundColor: `rgba(${this.props.config.backgroundColor},${this.props.config.opacity})`,
            color: this.props.config.fontColor,
            width: this.props.width || 600,
            height: this.props.height || 500
        }
        const styleHeader = {
            backgroundColor: `rgba(${this.props.config.backgroundColor},${this.props.config.opacity+0.1})`,
            color: this.props.config.fontColor,
        }
        return (
            <section ref={dialog => this.dialog = dialog} className='dialog' style={style}>
                <div className='dialog-header' style={styleHeader}>{this.props.title}</div>
                <div className='dialog-content'>{this.props.children}</div>
            </section>
        )
    }
}