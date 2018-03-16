
/**
 * Class Resizable
 * How to create a resizable element:
 * 1. Import Resizable.js file to project.
 * 2. Get one dom object: let dialog = document.getElementById('alarmDailog').
 * 3. Add configuration: let options = {container: dialog}.
 * 4. Create instance: new Resizable(options).
 * Configuration:
 * 	let options = {
 * 		container: [resize element],     //It is required, a dom object.
 * 		style: {												 //Styles for resizable element
 * 			border: '2px dashed #c7c1c1',
 * 		},
 * 		minWidth: 100,									 //Minimum width of the element
 * 		minHeight: 100									 //Minimum height of the element
 * 	};
 */

export default class Resizable {

	/**
	 * Constructor for create a resizable element
	 * @param {object} options 
	 */
	constructor(options) {
		let params = this._getParameters();
        if (params.resizable === 'false') {
            return;
        }
		this.style = {
			border: '0px dashed #c7c1c1',
			boxSizing: 'border-box' 
		};
		this.options = {
			minWidth: 100,
			minHeight: 100,
			padding: 5,
			clicked: null,
			onRightEdge: null,
			onBottomEdge: null,
			onLeftEdge: null,
			onTopEdge: null,
			b: null,
			x: null,
			y: null,
			e: null,
			redraw: false,
			container: null,
		};
		this.options = Object.assign(this.options, options);
		this.style = Object.assign(this.style, options.style);
		this.options.style = this.style;
		this._animate();
		this._initEvents();
		this._initStyles();
	}

	/**
     * Get the parameters from url
     */
	_getParameters() {
        let params = location.href.split('?')[1] && location.href.split('?')[1].split('&') || [];
        let obj = {};
        params.forEach(function(v, k) {
            obj[v.split('=')[0]] = v.split('=')[1];
        });
        return obj;
    }

	/**
	 * Initialize container styles
	 */
	_initStyles() {
		Object.keys(this.options.style).forEach(function (key, index) {
			this.options.container.style[key] = this.options.style[key];
		}.bind(this));
	}

	/**
	 * Initialize html events for container
	 */
	_initEvents() {
		this.options.container.addEventListener('mousedown', this._onMouseDown.bind(this));
		document.addEventListener('mousemove', this._onMove.bind(this));
		document.addEventListener('mouseup', this._onUp.bind(this));
	}

	/**
	 * Handle mouse down event
	 * @param {object} e 
	 */
	_onMouseDown(e) {
		this._calc(e);
		let isResizing = this.options.onRightEdge || this.options.onBottomEdge || this.options.onTopEdge || this.options.onLeftEdge;
		this.options.clicked = {
			x: this.options.x,
			y: this.options.y,
			cx: e.clientX,
			cy: e.clientY,
			w: this.options.b.width,
			h: this.options.b.height,
			isResizing: isResizing,
			onTopEdge: this.options.onTopEdge,
			onLeftEdge: this.options.onLeftEdge,
			onRightEdge: this.options.onRightEdge,
			onBottomEdge: this.options.onBottomEdge
		};
		e.preventDefault();
	}

	/**
	 * 
	 * @param {object} e 
	 */
	_calc(e) {
		this.options.b = this.options.container.getBoundingClientRect();
		this.options.x = e.clientX - this.options.b.left;
		this.options.y = e.clientY - this.options.b.top;
		this.options.onTopEdge = this.options.y < this.options.padding;
		this.options.onLeftEdge = this.options.x < this.options.padding;
		this.options.onRightEdge = this.options.x >= this.options.b.width - this.options.padding;
		this.options.onBottomEdge = this.options.y >= this.options.b.height - this.options.padding;
	}

	/**
	 * Handle mouse move event
	 * @param {object} ee 
	 */
	_onMove(ee) {
		this._calc(ee);
		this.options.e = ee;
		this.options.redraw = true;
	}

	/**
	 * Do animate when need resize
	 */
	_animate() {
		requestAnimationFrame(function () {
			this._animate();
		}.bind(this));

		if (!this.options.redraw) {
			return;
		}
		this.options.redraw = false;

		if (this.options.clicked && this.options.clicked.isResizing) {
			if (this.options.clicked.onRightEdge) {
				this.options.container.style.width = Math.max(this.options.x, this.options.minWidth) + 'px';
			}
			if (this.options.clicked.onBottomEdge) {
				this.options.container.style.height = Math.max(this.options.y, this.options.minHeight) + 'px';
			}
			if (this.options.clicked.onLeftEdge) {
				let currentWidth = Math.max(this.options.clicked.cx - this.options.e.clientX + this.options.clicked.w, this.options.minWidth);
				if (currentWidth > this.options.minWidth) {
					this.options.container.style.width = currentWidth + 'px';
					this.options.container.style.left = this.options.e.clientX + 'px';
				}
			}
			if (this.options.clicked.onTopEdge) {
				let currentHeight = Math.max(this.options.clicked.cy - this.options.e.clientY + this.options.clicked.h, this.options.minHeight);
				if (currentHeight > this.options.minHeight) {
					this.options.container.style.height = currentHeight + 'px';
					this.options.container.style.top = this.options.e.clientY + 'px';
				}
			}
			return;
		}

		if (this.options.onRightEdge && this.options.onBottomEdge || this.options.onLeftEdge && this.options.onTopEdge) {
			this.options.container.style.cursor = 'nwse-resize';
		} else if (this.options.onRightEdge && this.options.onTopEdge || this.options.onBottomEdge && this.options.onLeftEdge) {
			this.options.container.style.cursor = 'nesw-resize';
		} else if (this.options.onRightEdge || this.options.onLeftEdge) {
			this.options.container.style.cursor = 'ew-resize';
		} else if (this.options.onBottomEdge || this.options.onTopEdge) {
			this.options.container.style.cursor = 'ns-resize';
		} else {
			this.options.container.style.cursor = 'default';
		}
	}

	/**
	 * Handle mouse up event
	 * @param {object} e 
	 */
	_onUp(e) {
		this.options.clicked = null;
	}

}