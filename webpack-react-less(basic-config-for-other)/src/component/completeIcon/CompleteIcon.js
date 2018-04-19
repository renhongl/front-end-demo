

import React, {Component} from 'react';
import completeIcon from './complete.jpg';
import incompleteIcon from './incomplete.png';
import './style.css';

export default class CompleteIcon extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const iconType = this.props.item.complete ? completeIcon : incompleteIcon;
        return (
            <img className='complete-icon' src={iconType} width='30' height='30' id={this.props.item.id} onClick={this.props.handleClick}/>
        )
    }
}