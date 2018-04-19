

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Tooltip } from 'antd';
import { lang } from '../../share/config/lang';
import './style.less';

export default class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            now: new Date()
        }
    }

    getMinDialogs = () => {
        let minDialogs = [];
        for (let p in this.props.config) {
            if (this.props.config[p].id &&this.props.config[p].status === 'min') {
                minDialogs.push(this.props.config[p]);
            }
        }
        return minDialogs;
    }

    componentDidMount() {
        this.timer = setInterval( () => {
            this.setState({
                nwo: new Date()
            })
        }, 1000); 
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    getTimeStr = () => {
        return this.state.now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    }

    render() {
        const { config, restoreDialog, toggleStore, toggleSetting, toggleAwesomeClock } = this.props;
        const { backgroundColor, opacity, fontColor, language } = config;
        const style = {
            backgroundColor: `rgba(${backgroundColor},${opacity})`,
            color: fontColor,
        }
        const color = {
            color: fontColor,
        }
        const minDialogs = this.getMinDialogs().map( (v, k) => (
            <Tooltip title={lang[language][v.id.toUpperCase()]} key={k}>
                <span className='icon' onClick={() => restoreDialog(v.id)}>
                    <Icon type={v.class}/>
                </span>
            </Tooltip>
        ));
        return (
            <footer className='footer' style={style}>
                <div className='left' style={style}>
                    <Tooltip title={lang[language]['APPLICATION']}><span className='icon'><Icon type="home" onClick={toggleStore} style={color}/></span></Tooltip>
                    {minDialogs}
                </div>
                <div className='right' style={style}>
                    <Tooltip title={lang[language]['SETTING']}><span className='icon'><Icon type="setting" onClick={toggleSetting} style={color}/></span></Tooltip>
                    <Tooltip title={this.getTimeStr()} >
                        <span className='icon time' onClick={toggleAwesomeClock} style={color}>
                            {this.getTimeStr()}
                        </span>
                    </Tooltip>
                </div>
            </footer>
        )
    }
}

Footer.propTypes = {
    config: PropTypes.object.isRequired,
    toggleSetting: PropTypes.func,
}

Footer.defaultProps = {
    config: {}
}