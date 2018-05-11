

import React, { Component } from 'react';
import store from './Store';

export default class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = this.getState();
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    onChange = () => {
        this.setState(this.getState());
    }

    getState() {
        let total = 0;
        let state = store.getState();
        for (let key of Object.keys(state)) {
            total += state[key];
        }
        return {
            total,
        }
    }

    render() {
        return (
            <div>
                {this.state.total}
            </div>
        )
    }
}