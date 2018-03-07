

import React, {Component} from 'react';
// import './style.css';

export default class TodoFilter extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.filterTodo(e, e.target.value);
    }

    render() {
       return (
            <div>
                <input type="radio" name="type" value="All" onClick={this.handleClick}/>All
                <input type="radio" name="type" value="Completed" onClick={this.handleClick}/>Completed
                <input type="radio" name="type" value="Incompleted" onClick={this.handleClick}/>Incompleted
            </div>
        )
    }
}