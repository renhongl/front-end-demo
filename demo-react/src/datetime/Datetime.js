


import React, { Component } from 'react';

export default class DatetimeComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: ''
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    componentWillMount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                {this.state.time}
            </div>
        )
    }
}