

import React from 'react';
import TodoList from './todoListCont';
import AddTodo from './addTodoCont';
import '../style.css';

export default () => {
    return (
        <div>
            <AddTodo />
            <TodoList />
        </div>
    )
}