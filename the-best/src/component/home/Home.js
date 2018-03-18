

import React, { Component } from 'react';

import { Background } from '../background';
import { Footer } from '../footer';
import { Setting } from '../setting';
import { defaultTheme, urlApplication, defaultSetting} from '../../share/config/globalConfig';
import { colorRgb } from '../../share/tool/globalFunc';
import { Dialog } from '../dialog';
import { UrlDialog } from '../UrlDialog';
import { Store } from '../store';
import { BackgroundSwitch } from '../backgroundSwitch';

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
        this.closeDialog = this.closeDialog.bind(this);
        this.showDialog = this.showDialog.bind(this);
        this.toggleSwitchBg = this.toggleSwitchBg.bind(this);
        this.minDialog = this.minDialog.bind(this);
        this.restoreDialog = this.restoreDialog.bind(this);
        if (window.localStorage.getItem('state')) {
            this.state = JSON.parse(window.localStorage.getItem('state'));
        } else {
            this.state = defaultSetting;
            for(let app of urlApplication) {
                this.state[app.id] = app;
            }
            window.localStorage.setItem('state', JSON.stringify(this.state));
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
        window.localStorage.setItem('state', JSON.stringify(this.state));
    }

    closeDialog(name) {
        let dialog = {...this.state[name]};
        dialog.show = false;
        this.setState({
            [name]: dialog
        })
    }

    showDialog(name) {
        let dialog = {...this.state[name]};
        dialog.show = true;
        this.setState({
            [name]: dialog
        })
    }

    minDialog(name) {
        let dialog = {...this.state[name]};
        dialog.status = 'min';
        this.setState({
            [name]: dialog
        })
    }

    restoreDialog(name) {
        let dialog = {...this.state[name]};
        dialog.status = 'normal';
        this.setState({
            [name]: dialog
        })
    }

    toggleSwitchBg() {
        this.setState({
            switchBg: !this.state.switchBg
        });
    }

    render() {
        const urlDialog = urlApplication.map( (v, k) => (
            <Dialog 
                key={k}
                config={this.state} 
                options={this.state[v.id]}
                closeDialog={this.closeDialog}
                minDialog={this.minDialog}
            >
                <UrlDialog options={this.state[v.id]}/>
            </Dialog>
        ))
        return (
            <div className='home'>
                {urlDialog}
                <Background 
                    config={this.state} 
                    closeSetting={this.closeSetting}
                />
                <Footer 
                    config={this.state} 
                    toggleSetting={this.toggleSetting}
                    toggleStore={this.toggleStore}
                    restoreDialog={this.restoreDialog}
                />
                <Setting 
                    show={this.state.showSetting} 
                    config={this.state} 
                    changeBg={this.changeBg} 
                    changeBgColor={this.changeBgColor} 
                    changeBgOpacity={this.changeBgOpacity}
                    changeFontColor={this.changeFontColor}
                    toggleSwitchBg={this.toggleSwitchBg}
                />
                <Store 
                    show={this.state.showStore} 
                    config={this.state} 
                    showDialog={this.showDialog}
                    toggleStore={this.toggleStore}
                />
                <BackgroundSwitch 
                    switchBg={this.state.switchBg}
                    closeSetting={this.closeSetting}
                />
            </div>
        )
    }
}