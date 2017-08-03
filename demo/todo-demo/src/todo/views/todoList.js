


import React, { Component } from 'react';
import TodoItem from './todoItem';

export default ({todoList, removeTodo, toggleTodo}) => {
    return (
        <ul>
            {todoList.map((v, k) => {
                return <TodoItem key={k} id={v.id} onRemove={() => removeTodo(v.id)} checked={v.completed} onToggle={() => toggleTodo(v.id)}>{v.text}</TodoItem>
            })}
        </ul>
    )
}
