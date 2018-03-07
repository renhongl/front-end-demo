

import React, { Component } from 'react';
import './style.less';
import logo from '../../image/logo.jpg';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { updateTime } = this.props;
        setInterval(() => {
            updateTime();
        }, 1000);
    }

    render() {
        const { time } = this.props;
        return (
            <header>
                <img className='header-logo' src={logo} />
                <div className='header-time'>{time.toTimeString().split(' ')[0]}</div>
            </header>
        )
    }
}