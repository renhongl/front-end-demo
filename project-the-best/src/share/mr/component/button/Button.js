
import { extend } from '../tool.js';

export default class Button{
	constructor(options) {
		this.className = 'mr-button';
		this.options = {
			type: 'default'
		}
		this.options = extend(this.options, options);
		this._init();
	}
	
	_init(){
		this._render();
	}
	
	_render() {
		let container = this.options.container;
		container.setAttribute('class', this.className + ' ' + this.className + '-' + this.options.type);
		this._clickButton(container);
	}

	_clickButton(container) {
		container.addEventListener('click', (e) => {
            let x = e.offsetX;
			let y = e.offsetY;
			let span = document.createElement('span');
			let width = e.target.clientWidth;
			let height = e.target.clientHeight;
			let timer;
			let that =  this;
			span.setAttribute('class', 'mr-button-click')
			span.style.left = x + 'px';
			span.style.top = y + 'px';
			span.style.opacity = 0.5;
			container.appendChild(span);
			let times = 40;
			let stepWidth = (width * 2 - span.clientWidth) / times;
			let stepOpacity = span.style.opacity / times;
			timer = requestAnimationFrame(function fn() {
				if(span.clientWidth < width * 2 || span.clientHeight < height * 2) {
					that._animation(span, stepWidth, stepOpacity);
					timer = requestAnimationFrame(fn);
				} else {
					container.removeChild(span);
					cancelAnimationFrame(timer);
				}
			});
        })
	}

	_animation(span, stepWidth, stepOpacity) {
		span.style.width = span.clientWidth + stepWidth + 'px';
		span.style.height = span.clientHeight + stepWidth + 'px';
		span.style.opacity = span.style.opacity - stepOpacity;
	}
}
