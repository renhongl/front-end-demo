
import { extend } from '../tool.js';

export default class Loading {
    constructor(options) {
        this.className = 'mr-loading';
        this.options = {
            type: 'circle'
        }
        this.options = extend(this.options, options);
        this._init();
    }

    _init() {
        this._render();
    }

    destroy() {
        this.options.container.style.opacity = 0;
        this.options.container.innerHTML = '';
        setTimeout(function() {
            this.options.container.style.display = 'none';
        }.bind(this), 500);
    }

    _render() {
        this.options.container.style.display = 'flex';
        this.options.container.style.opacity = 1;
        this.container = document.createElement('div');
        this.options.container.appendChild(this.container);
        this.options.container.setAttribute('class', this.options.container.getAttribute('class')+ ' ' + this.className + '-container');
        this.container.setAttribute('class', this.className + '-' + this.options.type);
        if (this.options.type === 'circle') {
            this._renderLoading(2);
        } else if (this.options.type === 'rect') {
            this._renderLoading(3);
        } else if (this.options.type === 'stretch-rect') {
            this._renderLoading(5);
        }
    }

    _renderLoading(len) {
        for (let i = 0; i < len; i++) {
            let span = document.createElement('span');
            this.container.appendChild(span)
        }
    }
}
