

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { backgroundImage } from '../../share/config/globalConfig';
import './style.less';
import Background from '../background';
import { lang } from '../../share/config/lang';
import { Icon } from 'antd';

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
        const arrowStyle = {
            transform: this.state.showList ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'all .5s ease-in-out',
            marginRight: '8px'
        }
        return (
            <section className='background-image'>
                <h4 onClick={this.toggleList} style={style}><Icon type="right" style={arrowStyle}/>{lang[language]['BACKGROUND-IMAGE-SETTING']}</h4>
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