

import React, {Component} from 'react';
import './style.css';

export default class ItemContent extends Component{
    constructor(props) {
        super(props);
    }

    render() {
       if(this.props.item.complete) {
            return (
                <span className="item-invalid">{this.props.item.todo}</span>
            )
       }
       return (
            <span className="item-valid">{this.props.item.todo}</span>
        )
    }
}