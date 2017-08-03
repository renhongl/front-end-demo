


import React, { Component } from 'react';

export default ({checked, onRemove, onToggle, children}) => {
    if (checked) {
        return (
            <li className="todo-item">
                <img src="./assets/icons/checked.gif" width="20" height="20" alt="checked" onClick={onToggle} />
                <span>{children}</span>
                <img src="./assets/icons/remove.png" width="20" height="20" alt="remove" onClick={onRemove} />
            </li>
        )
    } else {
        return (
            <li className="todo-item">
                <img src="./assets/icons/unchecked.gif" width="20" height="20" alt="unchecked" onClick={onToggle} />
                <span>{children}</span>
                <img src="./assets/icons/remove.png" width="20" height="20" alt="remove" onClick={onRemove} />
            </li>
        )
    }
}
