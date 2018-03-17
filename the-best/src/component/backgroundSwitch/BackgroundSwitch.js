

import React, { Component } from 'react';
import { Carousel } from '../../share/mr/mr';
import { backgroundImage } from '../../share/config/globalConfig';

import './style.less';

export default class BackgroundSwitch extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        new Carousel({
            container: this.bgSwitch
        });
    }

    render() {
        const list = backgroundImage.map( (v, k) => (
            <div key={k}><img src={`./assets/image/${v}`} className='swtich-img'/></div>
        ))
        return (
            <section className={this.props.switchBg ? 'bg-switch show' : 'bg-switch hide'} onClick={this.props.closeSetting}>
                <div className='switch' ref={bgSwitch => this.bgSwitch = bgSwitch}>
                    {list}
                </div>
            </section>
        )
    }
}