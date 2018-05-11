


import Todo from './Todo';
import React, { Component } from 'react';
import * as ActionTypes from './ActionType';
import { TodoStore } from './TodoStore';
import { addNewItem } from './Action';

export default class TodoController extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: TodoStore.getAll()
        }
    }

    componentDidMount() {
        TodoStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this.onChange);
    }

    onChange = () => {
        this.setState({
            items: TodoStore.getAll()
        })
    }

    createNewItem = () => {
        addNewItem('New Item');
    }

    render() {
        return <Todo onClick={this.createNewItem} items={this.state.items}/>
    }
}