

import React, { Component } from 'react';
import './style.css';

export default class TodoListComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { list, toggleComplete } = this.props;
        const listDiv = list.map((v, k) => {
            if(v.complete) {
                return <div key={k} className="complete-line"><input type="checkbox" checked={true} onChange={() => {toggleComplete(v)}}/>{v.id + ': ' + v.text}</div>
            }
            return <div key={k}><input type="checkbox" onChange={() => {toggleComplete(v)}} checked={false}/>{v.id + ': ' + v.text}</div>
        })
        return (
            <div>
                {listDiv}
            </div>
        )
    }
}