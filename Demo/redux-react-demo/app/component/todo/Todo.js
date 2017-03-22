

import React, { Component } from 'react';

export default class Todo extends Component{
    constructor(props) {
        super(props);
    }

    getNewTodo() {
        const newTodo = this.refs.input.value;
        const { addTodo } = this.props;
        addTodo(newTodo);
        this.refs.input.value = '';
    }

    removeThisTodo(k) {
        const { removeTodo } = this.props;
        removeTodo(k);
    }

    render() {
        const { todo } = this.props;
        const todoItem = todo.map((v, k) => {
            return (
                <p key={k}>
                    {k+ ': ' + v}<input type="button" value="X" onClick={this.removeThisTodo.bind(this, k)}/>
                </p>
            )
        });
        return (
            <section>
                {todoItem}
                <input ref="input" type="text" /><input type="button" value="添加" onClick={this.getNewTodo.bind(this)}/>
            </section>
        );
    }
}