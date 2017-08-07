

import React, { Component } from 'react';

export default class AddTodo extends Component{
    constructor(props) {
        super(props);
        this.state =  {
            input: ''
        };
        this.addTodo = this.addTodo.bind(this);
        this.typeInput = this.typeInput.bind(this);
    }

    addTodo() {
        const value = this.state.input;
        const addTodo = this.props.addTodo;
        if (value.trim()) {
            addTodo(value);
            this.setState({
                input: ''
            });
        }
    }

    typeInput(e) {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <div className="add-todo">
                <input type="text" value={this.state.input}  onChange={this.typeInput}/>
                <button onClick={this.addTodo}>添加</button>
            </div>
        )
    }
}