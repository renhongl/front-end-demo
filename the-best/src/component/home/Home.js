

import React, { Component } from 'react';

import { Background } from '../background';
import { Footer } from '../footer';
import { defaultTheme } from '../../share/config/globalConfig';

import './style.less';

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.changeBg = this.changeBg.bind(this);
        this.state = {
            backgroundColor: defaultTheme.MAIN_COLOR,
            fontColor: 'red',
            backgroundImage: './assets/image/2.jpg',
            autoPlay: false,
            displaySize: 'cover',
            opacity: 0.8,
        }
    }

    changeBg(e) {
        this.setState({
            backgroundImage: e.target.getAttribute('src')
        })
    }

    render() {
        return (
            <div className='home'>
                <Background config={this.state}/>
                <Footer config={this.state} changeBg={this.changeBg}/>
            </div>
        )
    }
}