

import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { updateTime } = this.props;
        setInterval( () => {
            updateTime();
        }, 1000);
    }

    render() {
        const { time } = this.props;
        return(
            <header>
                <div>{time.toTimeString().split(' ')[0]}</div>
            </header>
        )
    }
}