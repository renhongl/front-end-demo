

import React, { Component } from 'react';
import { Background } from '../background';
import { Footer } from '../footer';
import { Setting } from '../setting';
import { application, defaultSetting, notificationStyle } from '../../share/config/globalConfig';
import { colorRgb } from '../../share/tool/globalFunc';
import { Dialog } from '../dialog';
import { UrlDialog } from '../UrlDialog';
import { MarkdownEditor } from '../markdownEditor';
import { Store } from '../store';
import { BackgroundSwitch } from '../backgroundSwitch';
import { AwesomeClock } from '../awesomeClock';
import { Button, notification, Icon } from 'antd';
import { lang } from '../../share/config/lang';
import { VideoPlayer } from '../videoPlayer';
import './style.less';

export default class Home extends Component {
    constructor(props) {
        super(props);
        if (window.localStorage.getItem('state')) {
            this.state = JSON.parse(window.localStorage.getItem('state'));
        } else {
            this.state = defaultSetting;
            for (let app of application) {
                this.state[app.id] = app;
            }
            window.localStorage.setItem('state', JSON.stringify(this.state));
        }
    }

    changeBg = (e) => {
        this.setState({
            backgroundImage: e.target.getAttribute('src')
        })
    }

    changeBgColor = (color) => {
        let c = colorRgb(color);
        this.setState({
            backgroundColor: c.split('(')[1].split(')')[0]
        });
    }

    changeFontColor = (color) => {
        this.setState({
            fontColor: color
        })
    }

    changeBgOpacity = (value) => {
        this.setState({
            opacity: value/10
        })
    }

    closeSetting = () => {
        this.setState({
            showSetting: false
        });
    }

    toggleSetting = () => {
        this.setState({
            showSetting: !this.state.showSetting
        });
    }

    toggleStore = () => {
        this.setState({
            showStore: !this.state.showStore
        });
    }

    componentDidUpdate() {
        window.localStorage.setItem('state', JSON.stringify(this.state));
    }

    componentDidMount() {
        setTimeout(() => {
            this.openNotification();
        }, 2000);
        if(this.state.showHeart) {
            document.addEventListener('click', this.renderHeart);
        }
    }

    renderHeart(e) {
        let x = e.clientX;
        let y = e.clientY;
        let chest = document.createElement('div');
        chest.setAttribute('id', 'chest');
        chest.style.left = x + 'px';
        chest.style.top = y + 'px';
        let left = document.createElement('div');
        left.setAttribute('class', 'heart left side top');
        let right = document.createElement('div');
        right.setAttribute('class', 'heart right side');
        let center = document.createElement('div');
        center.setAttribute('class', 'heart center');
        center.innterText = '&hearts;';
        document.body.appendChild(chest);
        chest.appendChild(left);
        chest.appendChild(center);
        chest.appendChild(right);
        setTimeout(() => {
            document.body.removeChild(chest);
        }, 1000);
    }

    openNotification = () => {
        notification.config({
            placement: 'bottomRight',
            duration: 4.5,
        });
        notification.open({
            message: lang[this.state.language]['WELCOME-MESSAGE'],
            description: lang[this.state.language]['WELCOME-DESC'],
            icon: <Icon type="smile-circle" style={{ color: `rgba(${this.state.backgroundColor},1)` }} />,
            style: notificationStyle
        });
    };

    closeDialog = (name) => {
        let dialog = { ...this.state[name] };
        dialog.show = false;
        this.setState({
            [name]: dialog
        })
    }

    showDialog = (name) => {
        let dialog = { ...this.state[name] };
        dialog.show = true;
        this.setState({
            [name]: dialog
        })
    }

    minDialog = (name) => {
        let dialog = { ...this.state[name] };
        dialog.status = 'min';
        this.setState({
            [name]: dialog
        })
    }

    restoreDialog = (name) => {
        let dialog = { ...this.state[name] };
        dialog.status = 'normal';
        this.setState({
            [name]: dialog
        })
    }

    toggleSwitchBg = () => {
        this.setState({
            switchBg: !this.state.switchBg
        });
    }

    toggleSwitchLang = () => {
        if(this.state.language) {
            this.setState({
                language: 0
            })
        } else {
            this.setState({
                language: 1
            })
        }
    }

    toggleAwesomeClock = () => {
        this.setState({
            showAwesomeClock: !this.state.showAwesomeClock
        })
    }

    toggleBgPicture = () => {
        this.setState({
            showBackgroundPicture: !this.state.showBackgroundPicture
        })
    }

    render() {
        const urlDialog = application.map((v, k) => {
            if(v.src) {
                return (
                    <Dialog
                        key={k}
                        config={this.state}
                        options={this.state[v.id]}
                        closeDialog={this.closeDialog}
                        minDialog={this.minDialog}
                    >
                        <UrlDialog options={this.state[v.id]} />
                    </Dialog>
                )
            }
        })
        return (
            <div className='home'>
                {urlDialog}
                <Dialog
                    config={this.state}
                    closeDialog={this.closeDialog}
                    minDialog={this.minDialog}
                    options={this.state.videoPlayer}
                >
                    <VideoPlayer options={this.state.videoPlayer} config={this.state}/>
                </Dialog>
                <Dialog
                    config={this.state}
                    closeDialog={this.closeDialog}
                    minDialog={this.minDialog}
                    options={this.state.article}
                >
                    <MarkdownEditor options={this.state.article} config={this.state}/>
                </Dialog>
                <Background
                    config={this.state}
                    closeSetting={this.closeSetting}
                />
                <Footer
                    config={this.state}
                    toggleSetting={this.toggleSetting}
                    toggleStore={this.toggleStore}
                    restoreDialog={this.restoreDialog}
                    toggleAwesomeClock={this.toggleAwesomeClock}
                />
                <Setting
                    show={this.state.showSetting}
                    config={this.state}
                    changeBg={this.changeBg}
                    changeBgColor={this.changeBgColor}
                    changeBgOpacity={this.changeBgOpacity}
                    changeFontColor={this.changeFontColor}
                    toggleSwitchBg={this.toggleSwitchBg}
                    toggleSwitchLang={this.toggleSwitchLang}
                    toggleBgPicture={this.toggleBgPicture}
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
                <AwesomeClock config={this.state} />
            </div>
        )
    }
}