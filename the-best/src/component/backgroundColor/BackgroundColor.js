

import React, { Component } from 'react';


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

    render() {
        const style = {
            color: this.props.color
        }
        return (
            <section className='background-color'>
                <h4 onClick={this.toggleList} style={style}>Background Color</h4>
                <ul className={this.state.showList ? 'show' : 'hide'}>
                    <li>red</li>
                    <li>red</li>
                    <li>red</li>
                    <li>red</li>
                </ul>
            </section>
        )
    }
}