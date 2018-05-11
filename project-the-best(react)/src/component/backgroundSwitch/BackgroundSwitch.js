

import React, { Component } from 'react';
import { Carousel } from '../../share/mr/mr';
import { switchImage } from '../../share/config/globalConfig';

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
        const { switchBg, closeSetting } = this.props;
        const list = switchImage.map( (v, k) => {
            const style = {
                backgroundImage: `url(./assets/image/${v})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
            }
            return (
                <div key={k} style={style}></div>
            )
        })
        return (
            <section className={switchBg ? 'bg-switch show' : 'bg-switch hide'} onClick={closeSetting}>
                <div className='switch' ref={bgSwitch => this.bgSwitch = bgSwitch}>
                    {list}
                </div>
            </section>
        )
    }
}