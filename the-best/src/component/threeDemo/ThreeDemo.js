

import React, { Component } from 'react';
import './style.less';


export default class ThreeDemo extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.initThree();
        this.renderThree();
    }

    renderThree() {
        requestAnimationFrame(() => {
            this.renderThree()
        });
        this.cube.rotation.x += 0.1;
        this.cube.rotation.y += 0.1;
        this.renderer.render(this.scene, this.camera);
    }

    initThree() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.threeDemo.appendChild(this.renderer.domElement);
        const geometry = new THREE.CubeGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        this.cube = new THREE.Mesh(geometry, material); 
        this.scene.add(this.cube);
        this.camera.position.z = 5;
    }

    render() {
        return (
            <div className='three-demo' ref={ threeDemo => this.threeDemo = threeDemo}>

            </div>
        )
    }
}