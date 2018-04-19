

export default class {
    constructor(options) {
        this.className = 'mr-preview';
        this.options = options;
        this.small = document.createElement('div');
        this.small.setAttribute('class', 'mr-preview-small-container');
        this.options.container.appendChild(this.small);
        this.img = document.createElement('img');
        this.img.src = this.options.url;
        this.small.appendChild(this.img);
        this.overlay = document.createElement('div');
        this.overlay.setAttribute('class', 'mr-preview-overlay');
        this.small.appendChild(this.overlay);
        this.bigger = document.createElement('div');
        this.bigger.style.backgroundImage = 'url('+this.options.url+')';
        this.bigger.setAttribute('class', 'mr-preview-bigger-container');
        this.options.container.appendChild(this.bigger);
        this.radius = 20;
        this._init();
    }

    _init() {
        this._addEvent();
        this._render();
    }

    _render() {
        this.options.container.setAttribute('class', this.className);
    }

    _addEvent() {
        this.small.onmousemove = (e) => {
            this.bigger.style.display = 'block';
            this.overlay.style.display = 'block';
            let offsetX = e.offsetX;
            let offsetY = e.offsetY;
            let beginX = (offsetX - this.radius) < -20 ? -20 : offsetX - this.radius;
            let endX = (offsetX + this.radius) > this.options.container.clientWidth ? this.options.container.clientWidth : offsetX + this.radius;
            let beginY = (offsetY - this.radius) < -20 ? -20 : offsetY - this.radius;
            let endY = (offsetY + this.radius) > this.options.container.clientHeight ? this.options.container.clientHeight : offsetY + this.radius;
            this._moveOverlay([beginX, beginY]);
            this._changePosition([offsetX, offsetY]);
        }
        this.small.onmouseout = (e) => {
            this.bigger.style.display = 'none';
            this.overlay.style.display = 'none';
        }
    }

    _moveOverlay(point) {
        this.overlay.style.left = point[0] + 'px';
        this.overlay.style.top = point[1] + 'px';
    }

    _changePosition(point) {
        let perX = point[0] / (this.options.container.clientWidth / 100) + '%';
        let perY = point[1] / (this.options.container.clientHeight / 100) + '%';
        this.bigger.style.backgroundPosition = perX + ' ' + perY;
    }
}




