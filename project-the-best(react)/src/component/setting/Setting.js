

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.less';
import { lang } from '../../share/config/lang';

import BackgroundImage from './BackgroundImage';
import BackgroundColor from './BackgroundColor';
import { BackgroundSwitch } from '../backgroundSwitch/index';
import BackgroundSwitchSetting from './BackgroundSwitchSetting';
import LanguageSwitch from './LanguageSwitch';

export default class Setting extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { config, changeBg, changeBgColor, changeBgOpacity, changeFontColor, show, toggleSwitchBg, toggleSwitchLang, toggleBgPicture, toggleShowHeart} = this.props;
        const { backgroundColor, opacity, fontColor, language } = config;
        const style = {
            backgroundColor: `rgba(${backgroundColor},${opacity})`,
            color: fontColor,
        }
        return (
            <section className={show ? 'setting show' : 'setting hide'} style={style}>
                <h3 className='setting-title' style={style}>{lang[language]['SETTING']}</h3>
                <BackgroundImage changeBg={changeBg} config={config}/>
                <BackgroundColor 
                    changeBgColor={changeBgColor} 
                    changeBgOpacity={changeBgOpacity} 
                    changeFontColor={changeFontColor}
                    toggleBgPicture={toggleBgPicture}
                    config={config}
                />
                <BackgroundSwitchSetting toggleSwitchBg={toggleSwitchBg} toggleShowHeart={toggleShowHeart} config={config}/>
                <LanguageSwitch toggleSwitchLang={toggleSwitchLang} config={config}/>
            </section>
        )
    }
}

Setting.propTypes = {
    show: PropTypes.bool.isRequired,
    config: PropTypes.object.isRequired,
    changeBg: PropTypes.func,
}

Setting.defaultProps = {
    show: false,
    config: {},
}