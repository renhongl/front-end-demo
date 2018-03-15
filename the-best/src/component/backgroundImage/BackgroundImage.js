

import React, { Component } from 'react';

import { backgroundImage } from '../../share/config/globalConfig';
import './style.less';

export default class BackgroundImage extends Component{
    constructor(props){
        super(props);
        this.toggleList = this.toggleList.bind(this);
        this.state = {
            showList: false
        }
    }

    toggleList() {
        this.setState({
            showList: !this.state.showList
        });
    }

    render() {
        const style = {
            color: this.props.color
        }
        const bgImageItem = backgroundImage.map((value, index) => {
            return (
                <li key={index} onClick={this.props.changeBg}><img src={`./assets/image/${value}`} className='bgPreview'/></li>
            )
        })
        return (
            <section className='background-image'>
                <h4 onClick={this.toggleList} style={style}>Background Image</h4>
                <ul className={this.state.showList ? 'show' : 'hide'}>
                    {bgImageItem}
                </ul>
            </section>
        )
    }
}