


import React, { Component } from 'react';
import Markdown from 'react-remarkable';
import { Input } from 'antd';
import { markdownText } from '../../share/config/globalConfig';
const { TextArea } = Input;
import './style.less';


export default class MarkdownEditor extends Component{
    constructor(props) {
        super(props);
        this.loadedRain = false;
        this.state = {
            source: '**提示：**点击左边导航选择阅读',
            index: -1
        }
    }

    onType = (e) => {
        let value = e.target.value;
        this.setState({
            source: value
        });
    }

    autoType = (index = 0) => {
        clearInterval(this.timer);
        let text = markdownText[index].content;
        let len = 0;
        this.setState({
            index
        })
        this.timer = setInterval(() => {
            let str = text.substring(0, len++);
            this.setState({
                source: str
            });
            if (len > text.length) {
                clearInterval(this.timer);
            }
        }, 100)
    }

    changeText = (e) => {
        let index = Number(e.target.getAttribute('value'));
        this.autoType(index);
    }

    componentDidUpdate() {
        // if (!this.loadedRain) {
        //     this.renderRain();
        //     this.loadedRain = true;
        // }
    }

    componentDidMount() {
        // this.renderRain();
    }

    renderRain() {
        let n = Math.ceil(Math.random() * 10) + 5;
        for (let i = 0; i < n; i++) {
            let rain = document.createElement('span');
            rain.setAttribute('class', 'rain');
            let left = Math.random() * this.preview.clientWidth - 50;
            let top = Math.random() * this.preview.clientHeight - 50;
            if(left < 50) {
                left = 50;
            }
            if(top < 50) {
                top = 50;
            }
            rain.style.left = left + 'px';
            rain.style.top = top + 'px';
            let delay = Math.random() * 4000 + 1000;
            setTimeout(() => {
                this.preview.appendChild(rain);
            }, delay);
            setTimeout(() => {
                this.preview.removeChild(rain);
            }, 3000 + delay);
        }
        setTimeout(() => {
            this.renderRain();
        }, 5000);
    }

    render() {
        const { config, options } = this.props;
        if(!options.show) {
            return null;
        }
        const list = markdownText.map( (v, k) => (
            <div key={k} className={this.state.index === k ? 'selected' : ''} onClick={this.changeText} value={k}>{v.title}</div>
        ))
        return (
            <section className='markdown'>
                <div className='list'>
                    {list}
                </div>
                <div className='source'><TextArea rows={4} value={this.state.source} onChange={this.onType}/></div>
                <div className='preview' ref={preview => this.preview = preview}>
                    <div className='cover'></div>
                    <Markdown options={{html: true}}>{this.state.source}</Markdown>
                </div>
            </section>
        )
    }
}