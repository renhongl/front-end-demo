

import Bullet from './Bullet.js';

export default class Hero {
    constructor(position) {
        this.position = position;
        this.parent = document.getElementById('root');
        this.body = document.createElement('div');
        this.parent.appendChild(this.body);
        this.style = this.body.style;
        this._init();
    }

    _init() {
        this.style.width = '50px';
        this.style.height = '50px';
        this.style.background = 'grey';
        this.style.position = 'absolute';
        this.style.transform = 'translate(-50%, -50%)';
        this.style.pointerEvents = 'none';
        if (this.position) {
            this.style.left = this.position.x + 'px';
            this.style.top = this.position.y + 'px';
        }
    }

    _setPosition(position) {
        this.style.left = position.x + 'px';
        this.style.top = position.y + 'px';
    }

    _getPosition() {
        return {
            x: this._parseStrToNum(this.style.left),
            y: this._parseStrToNum(this.style.top)
        }
    }

    _parseStrToNum(str) {
        return Number.parseInt(str);
    }

    move() {
        this.parent.addEventListener('mousemove', (e) => {
            let x = e.offsetX;
            let y = e.offsetY;
            this._setPosition({x, y});
        });
    }

    shoot() {
        let position = this._getPosition();
        let bullet = new Bullet('top', 10, position);
        bullet.move();
        setTimeout(() => {
            this.shoot();
        }, 500);
    }
}