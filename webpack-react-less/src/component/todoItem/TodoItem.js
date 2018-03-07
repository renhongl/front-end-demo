

import React, {Component} from 'react';
import {CompleteIcon} from '../completeIcon';
import {ItemContent} from '../itemContent';
import './style.css';

export default class TodoItem extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='todo-item'>
                <CompleteIcon item={this.props.item} handleClick={this.props.handleClick}/>
                <ItemContent item={this.props.item}/>
            </div>
        )
    }
}