


import React from 'react';

export default (props) => {
    const itemHtml = props.items.map((item, index) => {
        return <li key={index}>{item}</li>
    });
    return (
        <div>
            <ul>{itemHtml}</ul>
            <button onClick={props.onClick}>New Item</button>
        </div>
    )
}