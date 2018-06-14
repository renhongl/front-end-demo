

import React, { Component } from 'react';

export default class AddTodoComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            placeholder: 'New Todo'
        }
    }

    onChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    addTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <div>
                <input type="text" placeholder={this.state.placeholder} value={this.state.input} onChange={this.onChange}/>
                <button onClick={this.addTodo}>add</button>
            </div>
        )
    }
}