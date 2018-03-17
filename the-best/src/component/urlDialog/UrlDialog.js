

import React, { Component } from 'react';
import './style.less';


export default class UrlDialog extends Component{
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        this.iframe.src = this.props.src;
    }

    render() {
        return (
            <iframe ref={iframe => this.iframe =iframe} src=''>
            </iframe>
        )
    }
}

