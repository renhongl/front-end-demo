

import React, { Component } from 'react';
import './style.less';

export default class Store extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            backgroundColor: `rgba(${this.props.config.backgroundColor},0.8)`,
            color: this.props.config.fontColor,
        }
        return (
            <section className={this.props.show ? 'store show' : 'store hide'} style={style}>

            </section>
        )
    }
}