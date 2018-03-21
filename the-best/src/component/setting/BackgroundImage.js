

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { backgroundImage } from '../../share/config/globalConfig';
import './style.less';
import Background from '../background';
import { lang } from '../../share/config/lang';

export default class BackgroundImage extends Component{
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
        const { config, changeBg } = this.props;
        const { fontColor, language } = config;
        const style = {
            color: fontColor
        }
        const bgImageItem = backgroundImage.map((value, index) => {
            return (
                <li key={index} onClick={changeBg}><img src={`./assets/image/${value}`} className='bgPreview'/></li>
            )
        })
        return (
            <section className='background-image'>
                <h4 onClick={this.toggleList} style={style}>{lang[language]['BACKGROUND-IMAGE-SETTING']}</h4>
                <ul className={this.state.showList ? 'show' : 'hide'}>
                    {bgImageItem}
                </ul>
            </section>
        )
    }
}

BackgroundImage.propTypes = {
    changeBg: PropTypes.func,
    color: PropTypes.string,
}

BackgroundImage.defaultProps = {
    color: '#fff'
}