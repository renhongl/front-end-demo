


import React from 'react';

export default ({checked, removeTodo, toggleTodo, id, children}) => {
    if (checked) {
        return (
            <li className="todo-item">
                <img src="./assets/icons/checked.gif" width="15" height="15" alt="checked" />
                <span className="finished">{children}</span>
                <img className="active-button" src="./assets/icons/remove.png" width="15" height="15" alt="remove" onClick={() => removeTodo(id)} />
            </li>
        )
    } else {
        return (
            <li className="todo-item">
                <img className="active-button" src="./assets/icons/unchecked.gif" width="15" height="15" alt="unchecked" onClick={() => toggleTodo(id)} />
                <span>{children}</span>
                <img className="active-button" src="./assets/icons/remove.png" width="15" height="15" alt="remove" onClick={() => removeTodo(id)} />
            </li>
        )
    }
}
