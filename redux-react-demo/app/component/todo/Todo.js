

import React, { Component } from 'react';
import './style.less';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.getNewTodo = this.getNewTodo.bind(this);
    }

    getNewTodo() {
        const { addTodo } = this.props;
        addTodo(this.input.value);
        this.input.value = '';
    }

    removeThisTodo(k) {
        const { removeTodo } = this.props;
        removeTodo(k);
    }

    render() {
        const { todo } = this.props;
        const todoItem = todo.map((v, k) => {
            return (
                <p key={k} className='todo-item'>
                    {k + ': ' + v}<input className='remove-button' type="button" value="X" onClick={() => this.removeThisTodo(k)} />
                </p>
            )
        });
        return (
            <section className='todo-section'>
                {todoItem}
                <input className='todo-input' type="text" ref={(input) => this.input = input} /><input className='addTodo-button' type="button" value="添加" onClick={this.getNewTodo} />
            </section>
        );
    }
}