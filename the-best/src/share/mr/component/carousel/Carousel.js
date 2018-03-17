

export default class Carousel {
    constructor(options) {
        this.className = 'mr-carousel';
        this.options = options;
        this._init();
    }

    _init() {
        this._render();
    }

    _render() {
        this.options.container.setAttribute('class', this.className);
        this.items = this.options.container.querySelectorAll('div');
        this.center = 0;
        this._setLayer(this.center);
        this._loop();
        this._createButton();
    }

    _loop() {
        this.timer = setInterval(function () {
            if (this.center < this.items.length - 1) {
                this.center++;
            } else {
                this.center = 0;
            }
            this._setLayer(this.center);
        }.bind(this), 10000);
    }

    _createButton() {
        let before = document.createElement('span');
        let after = document.createElement('span');
        before.setAttribute('class', 'mr-carousel-btn-before');
        before.innerText = '<';
        after.setAttribute('class', 'mr-carousel-btn-after');
        after.innerText = '>';
        this.options.container.appendChild(before);
        this.options.container.appendChild(after);
        this.reloopTimer;
        this._clickBefore(before);
        this._clickAfter(after);
    }

    _clickBefore(before) {
        before.onclick = function () {
            clearInterval(this.timer);
            clearTimeout(this.reloopTimer);
            this.reloopTimer = setTimeout(function () {
                this._loop();
            }.bind(this), 500);
            if (this.center <= 0) {
                this.center = this.items.length - 1;
            } else {
                this.center--;
            }
            this._setLayer(this.center);
        }.bind(this);
    }

    _clickAfter(after) {
        after.onclick = function () {
            clearInterval(this.timer);
            clearTimeout(this.reloopTimer);
            this.reloopTimer = setTimeout(function () {
                this._loop();
            }.bind(this), 500);
            if (this.center < this.items.length - 1) {
                this.center++;
            } else {
                this.center = 0;
            }
            console.log(this.center);
            this._setLayer(this.center);
        }.bind(this);
    }

    _setLayer(center) {
        let before = center - 1 < 0 ? this.items.length - 1 : center - 1;
        let after = center + 1 > this.items.length - 1 ? 0 : center + 1;
        Array.prototype.slice.call(this.items).forEach((item, i) => {
            if (i === before) {
                item.style.zIndex = 0;
                item.setAttribute('class', 'mr-carousel-item mr-carousel-item-before');
            } else if (i === center) {
                item.style.zIndex = 20;
                item.setAttribute('class', 'mr-carousel-item mr-carousel-item-center');
            } else if (i === after) {
                item.style.zIndex = 0;
                item.setAttribute('class', 'mr-carousel-item mr-carousel-item-after');
            } else {
                item.style.zIndex = -1;
                setTimeout(function () {
                    item.setAttribute('class', 'mr-carousel-item');
                }, 500);
            }
        })
    }
}
