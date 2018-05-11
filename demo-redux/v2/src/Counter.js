

import React, { Component } from 'react';
import store from './Store';
import { increment, decrement } from './Action';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = this.getState();
    }

    getState() {
        return {
            value: store.getState()[this.props.caption]
        }
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    onChange = () => {
        this.setState(this.getState());
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    onIncrement = () => {
        store.dispatch(increment(this.props.caption));
    }

    onDecrement = () => {
        store.dispatch(decrement(this.props.caption));
    }

    render() {
        return (
            <div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
                <span>{this.props.caption}</span>
                <span>{this.state.value}</span>
            </div>
        )
    }
}