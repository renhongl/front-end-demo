

import React from 'react';
import Layout from 'antd/lib/layout';
import Carousel from 'antd/lib/carousel';
import '../style.css';
import Spin from 'antd/lib/spin';

const Content = Layout.Content;

const imageList = [
                    '/assets/demoImages/aiting1.png',
                    '/assets/demoImages/aiting4.png',
                    '/assets/demoImages/applicationPlatform.png',
                    '/assets/demoImages/chatRoom2.png',
                    '/assets/demoImages/faceAndEmoj.png',
                    '/assets/demoImages/homeAndRoom.png'
                    ]

export default class ContentComp extends React.Component{
    constructor(props) {
        super(props);
        this.iframeLoaded = this.iframeLoaded.bind(this);
    }

    iframeLoaded() {
        this.refs.loading.style.display = 'none';
    }

    componentDidUpdate() {
        this.refs.loading.style.display = 'block';
    }

    renderMainContent() {
        if (this.props.demo.trim() !== '') {
            return (
                <iframe src={this.props.demo} title="demo" onLoad={this.iframeLoaded}></iframe>
            )
        } else {
            return (
                <Carousel autoplay>
                    {
                        imageList.map((v, k) => {
                            return (
                                <div key={k} className="imageContainer"><img src={v} height="100%"/></div>
                            )
                        })
                    }
                </Carousel>
            )
        }
    }

    render() {
        return (
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <div ref="loading" className="loading-container"><Spin></Spin></div>
                {this.renderMainContent()}
            </Content>
        )
    }
}