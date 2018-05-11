

import React, { Component } from 'react';
import L from 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';
import './style.less';

export default class LeafletMap extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var map = L.map('leaflet').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }

    render() {
        return (
            <section id='leaflet'>

            </section>
        )
    }
}