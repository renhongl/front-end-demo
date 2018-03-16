

import React, { Component } from 'react';

import { Background } from '../background';
import { Footer } from '../footer';
import { Setting } from '../setting';
import { defaultTheme, applicationConfig} from '../../share/config/globalConfig';
import { colorRgb } from '../../share/tool/globalFunc';
import { Dialog } from '../dialog';
import { GoogleMap } from '../googleMap';
import { Blob } from '../blob';
import { Store } from '../store';

import './style.less';

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.changeBg = this.changeBg.bind(this);
        this.changeBgColor = this.changeBgColor.bind(this);
        this.changeBgOpacity = this.changeBgOpacity.bind(this);
        this.changeFontColor = this.changeFontColor.bind(this);
        this.toggleSetting = this.toggleSetting.bind(this);
        this.closeSetting = this.closeSetting.bind(this);
        this.toggleStore = this.toggleStore.bind(this);
        this.state = {
            backgroundColor: defaultTheme.MAIN_COLOR,
            fontColor: '#fff',
            backgroundImage: './assets/image/3.jpg',
            autoPlay: false,
            displaySize: 'cover',
            opacity: 0.1,
            showSetting: false,
            showStore: false,
        }
    }

    changeBg(e) {
        this.setState({
            backgroundImage: e.target.getAttribute('src')
        })
    }

    changeBgColor(e) {
        let color = e.target.value;
        color = colorRgb(color);
        this.setState({
            backgroundColor: color.split('(')[1].split(')')[0]
        });
    }

    changeFontColor(e) {
        this.setState({
            fontColor: e.target.value
        })
    }

    changeBgOpacity(e) {
        let opacity = e.target.value/10;
        this.setState({
            opacity: opacity
        })
    }

    closeSetting() {
        this.setState({
            showSetting: false
        });
    }

    toggleSetting() {
        this.setState({
            showSetting: !this.state.showSetting
        });
    }

    toggleStore() {
        this.setState({
            showStore: !this.state.showStore
        });
    }

    componentDidUpdate() {
        console.log('updated');
    }

    render() {
        return (
            <div className='home'>
                <Dialog config={this.state} title='百度地图'>
                    <GoogleMap />
                </Dialog>
                <Dialog config={this.state} title='我的博客'>
                    <Blob />
                </Dialog>
                <Background config={this.state} closeSetting={this.closeSetting}/>
                <Footer 
                    config={this.state} 
                    toggleSetting={this.toggleSetting}
                    toggleStore={this.toggleStore}
                />
                <Setting 
                    show={this.state.showSetting} 
                    config={this.state} 
                    changeBg={this.changeBg} 
                    changeBgColor={this.changeBgColor} 
                    changeBgOpacity={this.changeBgOpacity}
                    changeFontColor={this.changeFontColor}
                />
                <Store show={this.state.showStore} config={this.state}/>
            </div>
        )
    }
}