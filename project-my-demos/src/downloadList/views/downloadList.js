

import React from 'react';
import Card from 'antd/lib/card';
import Icon from 'antd/lib/icon';
import '../style.css';
import Tooltip from 'antd/lib/tooltip';

const downloadList = [
    {
        title: '爱听播放器',
        url: 'https://renhongl.github.io/other/AiTing.zip',
        desc: '一个简洁、好看、功能丰富的播放器,相当于音乐播放器和听书软件的结合。',
        src: 'https://renhongl.github.io/images/aiting1.png'
    },
    {
        title: 'NodeJS刷票程序',
        url: 'https://github.com/renhongl/Buy_Ticket',
        desc: '这是一个脚本程序，运行在NodeJS环境之上，功能类似360抢票王。',
        src: 'https://renhongl.github.io/images/buyTicket.jpg'
    },
    {
        title: '网页聊天软件',
        url: 'https://github.com/renhongl/AP_WEB',
        desc: '目前平台除了搭建了基本的结构之外，还做了一个简单的一对一聊天应用和简单的博客系统。',
        src: 'https://renhongl.github.io/images/homeAndRoom.png'
    },
    {
        title: '桌面聊天室',
        url: 'https://github.com/renhongl/applicationPlatform',
        desc: '除了最基本的聊天外，还支持发一些表情，还可以设置字体，背景，以及主题。里面还集成了一个地图，如果是用电脑浏览器打开的，将会在地图上显示自己的位置。',
        src: 'https://renhongl.github.io/images/chatRoom2.png'
    }
]

export default () => {
    return (
        <div className="download-list-container">
        {
            downloadList.map((v, k) => {
                return (
                    <Card key={k} bodyStyle={{ padding: 0 }}>
                        <div className="custom-image">
                            <img alt="example" width="100%" height="100%" src={v.src} />
                        </div>
                        <div className="custom-card">
                        <h3>
                            {v.title}
                            <Tooltip title={'点击下载 [' + v.title + ']'} placement="right">
                                <a href={v.url}>
                                    <Icon type="download" className="download-icon"/>
                                </a>
                            </Tooltip>
                        </h3>
                        <p>{v.desc}</p>
                        </div>
                  </Card>
                )
            })
        }
        </div>
    )
}