

export default class Tab{
	constructor(options) {
		this.className = 'mr-tab';
		this.options = options;
		this._init();
	}
	
	_init() {
		this._render();
	}
	
	_render() {
		let container = this.options.container;
		let children = this._filterEmptyNode(container.childNodes);
		let ul = children[0];
		this.contents = this._filterEmptyNode(children[1].childNodes);
		this.main = children[1];
		container.setAttribute('class', this.className);
		children[1].setAttribute('class', 'mr-tab-content-main');
        ul.setAttribute('class', 'mr-tab-ul');
        let liArr = this._filterEmptyNode(ul.childNodes);
		this._setTab(liArr);
		this._setContents(0);
	}

	_setTab(liArr) {
		Array.prototype.slice.call(liArr).forEach((li, i) => {
            li.setAttribute('class', 'mr-tab-li');
            liArr[0].setAttribute('class', 'mr-tab-li mr-tab-active');
			li.onclick = (e) => {
                li.setAttribute('class', 'mr-tab-li');
				let key = Number(e.target.getAttribute('key'));
				Array.prototype.slice.call(liArr).forEach((item, index) => {
					item.setAttribute('class', 'mr-tab-li');
				});
				li.setAttribute('class', 'mr-tab-li mr-tab-active');
				this.main.style.transform = 'translateX(-' + (key-1) * 100 + '%)';
				this._tabRain(e);
			}
		})
	}

	_tabRain(e) {
		let span = document.createElement('span');
        let x = e.offsetX;
        let y = e.offsetY;
        span.setAttribute('class', 'click');
        span.style.left = x + 'px';
        span.style.top = y + 'px';
        e.target.appendChild(span);
        setTimeout(() => {
            e.target.removeChild(span);
        }, 500);
	}

	_setContents(key) {
		Array.prototype.slice.call(this.contents).forEach((content, i) =>{
			content.setAttribute('class', 'mr-tab-content');
			content.style.transform = 'translateX(' + i * 100 + '%)';
		})
	}
	
	_filterEmptyNode(nodes) {
		let temp = [];
		Array.prototype.slice.call(nodes).forEach((node, i) => {
			if (node.nodeValue === null) {
				temp.push(node);
			} else if (node.nodeValue.trim() !== '') {
				temp.push(node);
			}
		})
		return temp;
	}
	
}
