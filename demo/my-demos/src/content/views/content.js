

import React from 'react';
import Layout from 'antd/lib/layout';
import Carousel from 'antd/lib/carousel';
import '../style.css';

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
    }

    render() {
        let mainContent = 
            (
                <Carousel autoplay>
                    {
                        imageList.map((v, k) => {
                            if (this.props.demo.trim() !== '') {

                            } else {
                                return (
                                    <div key={k} className="imageContainer"><img src={v} height="100%"/></div>
                                )
                            }
                        })
                    }
                </Carousel>
            )

        return (
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                {mainContent}
            </Content>
        )
    }
}