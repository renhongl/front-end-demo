


import React from 'react';

export default class Weather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: '成都'
        }
    }

    componentDidMount() {
        this.props.updateWeather(this.state.search);
    }

    onChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    onSearch = () => {
        this.props.updateWeather(this.state.search);
    }

    render() {
        const { weather } = this.props;
        return (
            <div>
                <input type="search" value={this.state.search} onChange={this.onChange}/>
                <button onClick={this.onSearch}>Search</button>
                <div>
                    <h4>{weather ? weather.city : 'loading...'}</h4>
                    <div>{`温度：${weather ? weather.data.wendu : 'loading'}`}</div>
                    <div>{`湿度：${weather ? weather.data.shidu : 'loading'}`}</div>
                    <div>{`空气质量：${weather ? weather.data.quality : 'loading'}`}</div>
                    <div>{`PM2.5：${weather ? weather.data.pm25 : 'loading'}`}</div>
                    <div>{`温馨提醒：${weather ? weather.data.ganmao : 'loading'}`}</div>
                </div>
            </div>
        )
    }
}