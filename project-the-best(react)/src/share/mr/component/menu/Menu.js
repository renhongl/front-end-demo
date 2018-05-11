

import { extend } from '../tool.js';

export default class Menu {
    constructor(options) {
        this.className = 'mr-menu';
        this.options = {
            type: 'left'
        }
        this.options = extend(this.options, options);
        this._init();
    }

    _init() {
        this._render();
    }

    _render() {
        let container = this.options.container;
        let children = container.getElementsByTagName('a');
        let coverEle = document.createElement('li');
        coverEle.setAttribute('class', 'cover');
        container.appendChild(coverEle);
        container.setAttribute('class', this.className + ' ' + this.className + '-' + this.options.type);
        this._clickMenu(container, children, coverEle);
        this._mouseMenu(container, children, coverEle);
    }

    _mouseMenu(container, children, coverEle) {
        container.onmouseover = function(e) {
            let key = Number(e.target.parentNode.getAttribute('key'));
            if(key){
                coverEle.style.top = 50 * (key - 1) + 'px';
            }
        }
    }

    _clickMenu(container, children, coverEle) {
        container.onclick = (e) => {
            let key = Number(e.target.parentNode.getAttribute('key'));
            if(key){
                coverEle.style.top = 50 * (key - 1) + 'px';
            }
            Array.prototype.slice.call(children).forEach((item, i) => {
                item.setAttribute('class', '');
            });
            e.target.setAttribute('class', 'active');
            this._menuRain(e);
        }
    }

    _menuRain(e) {
        let span = document.createElement('span');
        let x = e.offsetX;
        let y = e.offsetY;
        span.setAttribute('class', 'click');
        span.style.left = x + 'px';
        span.style.top = y + 'px';
        e.target.parentNode.appendChild(span);
        span.style.opacity = 0.5;
        let timer;
        let times = 40;
        let that = this;
        let width = e.target.clientWidth;
		let height = e.target.clientHeight;
        let stepWidth = (width * 2 - span.clientWidth) / times;
        let stepOpacity = span.style.opacity / times;
        timer = requestAnimationFrame(function fn() {
            if(span.clientWidth < width * 2 || span.clientHeight < height * 2) {
                that._animation(span, stepWidth, stepOpacity);
                timer = requestAnimationFrame(fn);
            } else {
                e.target.parentNode.removeChild(span);
                cancelAnimationFrame(timer);
            }
        });
    }

    _animation(span, stepWidth, stepOpacity) {
		span.style.width = span.clientWidth + stepWidth + 'px';
		span.style.height = span.clientHeight + stepWidth + 'px';
		span.style.opacity = span.style.opacity - stepOpacity;
	}
}