




export default class Bullet {
    constructor(direction, speed, position) {
        this.direction = direction;
        this.speed = speed;
        this.position = position;
        this.body = document.createElement('div');
        this.parent = document.getElementById('root');
        this.parent.appendChild(this.body);
        this.style = this.body.style;
        this._init();
    }

    _init() {
        this.style.width = '20px';
        this.style.height = '30px';
        this.style.background = 'blue';
        this.style.position = 'absolute';
        this.style.transform = 'translate(-50%, -50%)';
        this.style.pointerEvents = 'none';
        this.style.left = this.position.x + 'px';
        this.style.top = this.position.y + 'px';
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
        switch(this.direction) {
            case 'top': 
                this._moveTop();
                break;
            default:
                break;
        }
    }

    _destroy() {
        this.parent.removeChild(this.body);
    }

    _moveTop() {
        let {x, y} = this._getPosition();
        y -= this.speed;
        this._setPosition({x, y});
        if (y > 0) {
            this.timer = requestAnimationFrame(() => {
                this._moveTop();
            });
        } else {
            this._destroy();
        }
    }
}