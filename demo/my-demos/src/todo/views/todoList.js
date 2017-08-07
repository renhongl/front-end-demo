


import React from 'react';
import TodoItem from './todoItemCont';

export default ({todoList}) => {
    return (
        <ul>
            {todoList.map((v, k) => {
                return <TodoItem key={k} id={v.id} checked={v.completed}>{v.text}</TodoItem>
            })}
        </ul>
    )
}
