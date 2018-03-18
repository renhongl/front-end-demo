

import React, { Component } from 'react';
import './style.less';


export default class UrlDialog extends Component{
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.options.show !== nextProps.options.show) {
            return true;
        }
        return false;
    }

    componentDidUpdate() {
        if (this.props.options.show) {
            this.iframe.src = this.props.options.src;
        } else {
            this.iframe.src = '';
        }
    }

    render() {
        return (
            <iframe ref={iframe => this.iframe =iframe} src=''>
            </iframe>
        )
    }
}

