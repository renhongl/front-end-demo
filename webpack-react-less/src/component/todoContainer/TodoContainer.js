

import React, {Component} from 'react';
import {TodoItem} from '../todoItem';
import {AddTodo} from '../addTodo';
import {TodoFilter} from '../todoFilter';
import './style.less';
import defaultData from './default.json';

export default class TodoContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            todoCount: 0,
            type: 'All'
        }
        this.handleClick = this.handleClick.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.filterTodo = this.filterTodo.bind(this);
    }

    componentDidMount() {
        this.fetchData().then(data => {
            this.setState({
                list: data.list,
                todoCount: data.list.length
            });
        });
    }

    fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(defaultData);
            }, 2000);
        });
    }

    handleClick(e) {
        const todoId = e.target.getAttribute('id');
        let tempList = this.state.list;
        for(let item of tempList) {
            if (item.id === todoId) {
                console.log('clicked ' + todoId);
                item.complete = !item.complete;
            }
        }
        this.setState({
            list: tempList
        });
    }

    addTodo(e, todoContent) {
        console.log(todoContent);
        let newCount = this.state.todoCount + 1;
        const newTodo = {
            id: '000' + newCount,
            todo: todoContent,
            complete: false
        };
        this.setState({
            list: [...this.state.list, newTodo],
        });
        this.setState((preState) => {
            return {
                todoCount: preState.todoCount + 1
            }
        });
    }

    filterTodo(e, type) {
        console.log(type);
        this.setState({
            type
        });
    }

    getTodoByType() {
        let type = this.state.type;
        let tempList = [];
        if (type === 'All') {
            return [...this.state.list];
        }
        if (type === 'Completed') {
            for(let item of this.state.list) {
                if (item.complete) {
                    tempList.push(item);
                }
            }
            return tempList;
        }
        if (type === 'Incompleted') {
            for(let item of this.state.list) {
                if (!item.complete) {
                    tempList.push(item);
                }
            }
            return tempList;
        }
    }

    render() {
        let list = this.getTodoByType();
        if(list.length === 0) {
            return (
                <div className='todo-container'>loading...</div>
            )
        }
        let todoList = list.map((item, i) => {
            return (
                <TodoItem key={i} item={item} handleClick={this.handleClick}></TodoItem>
            )
        });
        return (
            <div className='todo-container'>
                <div className='header'>
                    <TodoFilter filterTodo={this.filterTodo}/>
                </div>
                <div className='main'>
                    {todoList}
                </div>
                <div className='footer'>
                    <AddTodo addTodo={this.addTodo}/>
                </div>
            </div>
        )
    }
}