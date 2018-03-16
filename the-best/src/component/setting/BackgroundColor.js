

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BackgroundColor extends Component{
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

    componentDidMount() {
        
    }

    render() {
        const style = {
            color: this.props.config.fontColor
        }
        return (
            <section className='background-color'>
                <h4 onClick={this.toggleList} style={style}>背景颜色设置</h4>
                <ul className={this.state.showList ? 'show' : 'hide'}>
                    <li>背景色: <input type='color' onChange={this.props.changeBgColor}/></li>
                    <li>背景字体色: <input type='color' onChange={this.props.changeFontColor}/></li>
                    <li>透明度: <input className='opacity' type="number" min="0" max="10" value={this.props.config.opacity * 10} onChange={this.props.changeBgOpacity}/></li>
                </ul>
            </section>
        )
    }
}

BackgroundColor.propTypes = {
}

BackgroundColor.defaultProps = {
}