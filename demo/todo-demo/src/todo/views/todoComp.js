

import React, { Component } from 'react';
import TodoList from './todoList';
import AddTodo from './addTodo';
import '../style.css';

export default ({todoList, addTodo, removeTodo ,toggleTodo}) => {
    return (
        <div>
            <AddTodo addTodo={addTodo}/>
            <TodoList todoList={todoList} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    )
}