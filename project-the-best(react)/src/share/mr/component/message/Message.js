/**
 * 
 */

import { extend } from '../tool.js';

export default class Message {
	constructor(options) {
		this.messageDOM = document.createElement('span');
		this.className = 'mr-message';
		this.options = {
			position: 'center-top',
			message: 'default message',
			delay: 4000,
			type: 'infor'
		};
		this.options = extend(this.options, options);
		this._init();
	}
	
	_init() {
		this._render();
		this._destroy();
	}
	
	_destroy() {
		setTimeout(function () {
			this.messageDOM.style.animationPlayState = "paused";
		}.bind(this), 500);
		setTimeout(function() {
			this.messageDOM.style.animationPlayState = "running";
			setTimeout(function() {
				document.body.removeChild(this.messageDOM);
				this._resetPosition();
			}.bind(this), 500);
		}.bind(this), this.options.delay)
	}

	_resetPosition() {
		let items = document.querySelectorAll('.' + this.className + '-' + this.options.position);
		Array.prototype.slice.call(items).forEach((item, i) => {
			if(this.options.position !== 'center-bottom') { 
				let top = item.style.top;
				top = top.replace('px', '');
				item.style.top = Number(top) - 50 + 'px';
			} else {
				let bottom = item.style.bottom;
				bottom = bottom.replace('px', '');
				item.style.bottom = Number(bottom) - 50 + 'px';
			}
		});
	}
	
	_render() {
		let numbers = document.querySelectorAll('.' + this.className + '-' + this.options.position).length;
		this.messageDOM.setAttribute('class', this.className + ' ' + this.className + '-' + this.options.position + ' '+ this.className + '-' + this.options.type);
		this.messageDOM.innerText = this.options.message;
		if(this.options.position !== 'center-bottom') {
			this.messageDOM.style.top = numbers * 50 + 'px';
		} else {
			this.messageDOM.style.bottom = numbers * 50 + 'px';
		}
		document.body.appendChild(this.messageDOM);
	}
}
//---------------Plugin end---------------------------
