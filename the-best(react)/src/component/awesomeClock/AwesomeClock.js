

import React, { Component } from 'react';
import $ from 'jquery';
import './style.less';

export default class AwesomeClock extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        if(this.props.config.showAwesomeClock) {
            this.runClock();
        } else {
            clearInterval(this.timer);
        }
    }

    componentDidMount() {
        if(this.props.config.showAwesomeClock) {
            this.runClock();
        }
    }

    runClock() {
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.dailer('.second', 195);
        this.dailer('.minute', 145);
        this.dailer('.dail', 230);
        for (var s = 1; s < 13; s++) {
            $('.hour').append('<span style="transform: rotate(' + 30 * s + 'deg) translateX(100px)">' + s + '</span>')
        }
        this.timer = setInterval(() => {
            this.getTime();
        }, 1000);
        this.getTime();
    }

    getTime() {
        let date = new Date();
        let second = date.getSeconds();
        let minute = date.getMinutes();
        let hour = date.getHours();
        let time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        let day = date.getDay();
        let month = date.getMonth();
        date = date.getDate() + ' . ' + this.months[month];
        let ds = second * -6;
        let dm = minute * -6;
        let dh = hour * -30;
        $('.second').css('transform', 'rotate(' + ds + 'deg)');
        $('.minute').css('transform', 'rotate(' + dm + 'deg)');
        $('.hour').css('transform', 'rotate(' + dh + 'deg)');
        $('.time').text(time);
        $('.day').text(this.days[day]);
        $('.date').text(date)
    }

    dailer(selector, size) {
        for (var s = 0; s < 60; s++) {
            $(selector).append('<span style="transform: rotate(' + 6 * s + 'deg) translateX(' + size + 'px)">' + s + '</span>')
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.config.showAwesomeClock !== this.props.config.showAwesomeClock) {
            return true;
        }
        return false;
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { config } = this.props;
        return (
            <div className={config.showAwesomeClock ? "clock-container show" : "clock-container hide"}>
                <div className="clock-digital">
                    <div className="date"></div>
                    <div className="time"></div>
                    <div className="day"> </div>
                </div>
                <div className="clock-analog">
                    <div className="spear"></div>
                    <div className="hour"></div>
                    <div className="minute"></div>
                    <div className="second"></div>
                    <div className="dail"></div>
                </div>
            </div>
        )
    }
}