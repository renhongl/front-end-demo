

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Icon } from 'antd';
import { lang } from '../../share/config/lang';

export default class LanguageSwitch extends Component{
    constructor(props){
        super(props);
        this.state = {
            showList: false
        }
    }

    toggleList = () => {
        this.setState({
            showList: !this.state.showList
        });
    }

    render() {
        const { config, toggleSwitchLang} = this.props;
        const { fontColor, backgroundColor, opacity, language } = config;
        const style = {
            color: fontColor
        }
        const btnStye = {
            'backgroundColor': `rgba(${backgroundColor},${opacity})`
        }
        const arrowStyle = {
            transform: this.state.showList ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'all .5s ease-in-out',
            marginRight: '8px'
        }
        return (
            <section className='background-switch common-setting'>
                <h4 onClick={this.toggleList} style={style}><Icon type="right" style={arrowStyle}/>{lang[language]['LANGUAGE-SETTING']}</h4>
                <ul className={this.state.showList ? 'show' : 'hide'}>
                    <li><span className='key'>
                        {lang[language]['LANGUAGE-SWITCH']}:
                        </span> 
                            <Switch 
                            defaultChecked={language ? true : false} 
                            onChange={toggleSwitchLang} 
                            style={language ? btnStye : {}}
                            checkedChildren={lang[language]['ENGLISH']} unCheckedChildren={lang[language]['CHINESE']}
                        />
                    </li>
                </ul>
            </section>
        )
    }
}

