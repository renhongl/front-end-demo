

import React, {Component} from 'react';
// import './style.css';

export default class AddTodo extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const value = this.input.value;
        this.props.addTodo(e, value);
        this.input.value = '';
    }

    render() {
       return (
           <div>
               <input type="text" ref={input => this.input = input}/>
               <input type="button" value="add" onClick={this.handleClick}/>
            </div>
       )
    }
}