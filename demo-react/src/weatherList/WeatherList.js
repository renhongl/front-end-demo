

import React, { Component } from 'react';
import axios from 'axios';

const styles = {
    container: {
        width: '80%',
        margin: '0 auto',
        textAlign: 'left'
    }
}

export default class WeatherListComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '成都',
            list: []
        }
    }

    componentDidMount() {
        let url = 'https://www.sojson.com/open/api/weather/json.shtml?city=' + this.state.city;
        axios.get(url).then(result => {
            this.setState({
                list: result.data.data.forecast
            });
        }).catch((e) => {
            console.log(e);
        });
    }

    render() {
        let listDiv = this.state.list.map((v, k) => (
            <div key={k}>{`${v.date}，${v.high}，${v.low}，${v.type}，${v.notice}`}</div>
        ))
        return (
            <div style={styles.container}>
                <h4>{this.state.city}</h4>
                {listDiv}
            </div>
        )
    }
}