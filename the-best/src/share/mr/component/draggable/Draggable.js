/**
 * Class Draggable
 * How to create a draggable element:
 * 1. Import Draggable.js file to project.
 * 2. Get one dom object: let dialog = document.getElementById('alarmDailog').
 * 3. Add configuration: let options = {container: dialog, cursor: 'move'}.
 * 4. Create instance: new Draggable(options).
 * 5. Configuration:
 *     let options = {
 *         container: ''            //It is required, a dom object.
 *         adjustPosition: true     //If adjust element position when drag done.
 *         margin: 20               //Margin size from browser border.(Only enable when adjustPostion is true).
 *         cursor: 'default'        //Cursor config for drag element.
 *         dragZone: ''             //Target area of the drag event triggered.
 *         except: ''               //Element can not be drag.
 *         stop: function(self) {}  //Call this function when this element drag done, parameter self is the instance of class Draggable
 *     }
 * 6. Public function:
 *     diable: Disable drag
 *     enable: Enable drag
 */

 
export default class Draggable {
    /**
     * Constructor for create a draggable element
     * @param {object} options configuration for draggable element
     */
    constructor(options) {
        let params = this._getParameters();
        if (params.draggable === 'false') {
            return;
        }
        this.cursorX = 0;
        this.cursorY = 0;
        this.moving = false;
        this.eventMapping = {
            mousedown: this._mouseDown,
            mouseup: this._mouseUp,
            mouseover: this._mouseOver,
            mousemove: this._mouseMove
        };
        this.options = {
            id: Math.random(),
            container: null,
            cursor: 'default',
            dragZone: null,
            except: null,
            margin: 20,
            enable: true,
            padding: 5,
            adjustPosition: true,
            stop: function() {}
        };
        this.options = Object.assign(this.options, options);
        this._initEvent();
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
     * Initialize html events for element
     */
    _initEvent() {
        if (this.options.dragZone) {
            if (this._getElementBySelector(this.options.dragZone)) {
                this._addEvents(this._getElementBySelector(this.options.dragZone), ['mousedown', 'mouseover']);
            }
        } else {
            this._addEvents(this.options.container, ['mousedown', 'mouseover']);
        }
        if (this.options.except) {
            this._removeEventsForExcepts();
        }
        this._addEvents(document, ['mousemove', 'mouseup']);
    }

    /**
     * Add events for dom object
     * @param {dom object} target dom object for add events
     * @param {array} events html events
     */
    _addEvents(target, events) {
        let self = this;
        events.forEach(function (event, i) {
            target.addEventListener(event, self.eventMapping[event].bind(self));
        });
    }

    /**
     * Outside interface for disabel drag function
     * @example draggableInstance.disable()
     */
    disable() {
        this.options.enable = false;
    }

    /**
     * Outside interface for enable drag function
     * @example draggableInstance.enable()
     */
    enable() {
        this.options.enable = true;
    }

    /**
     * Remove events for excepts element on draggable element
     */
    _removeEventsForExcepts() {
        let excepts = this.options.container.querySelectorAll(this.options.except);
        excepts = Array.from(excepts);
        excepts.forEach(function(except, k) {
            except.onmousedown = function(e) {
                e.preventDefault();
                e.stopPropagation();
                except.style.cursor = 'default';
            }
            except.onmouseover = function(e) {
                e.preventDefault();
                e.stopPropagation();
                except.style.cursor = 'default';
            }
        });
    }
    /**
     * 
     * @param {object} e 
     */
    _mouseDown(e) {
        if (this.options.enable && this._inDragZone(e)) {
            this.moving = true;
            this._resetCursor(e);
        }
    }

    /**
     * Using to support resize
     * @param {object} e 
     */
    _inDragZone(e) {
        if (e.layerX > this.options.padding && 
            e.layerX < this.options.container.clientWidth - this.options.padding &&
            e.layerY > this.options.padding &&
            e.layerY < this.options.container.clientHeight - this.options.padding
        ) {
            return true;
        }
        return false;
    }

    /**
     * Handle mouse up event
     * @param {object} e 
     */
    _mouseUp(e) {
        this._dragDone();
    }

    /**
     * Handle mouse move event
     * @param {object} e 
     */
    _mouseMove(e) {
        if (this.moving && this.options.enable) {
            let offsetX = this.cursorX - e.clientX;
            let offsetY = this.cursorY - e.clientY;
            this._changePosition(offsetX, offsetY);
            this._resetCursor(e);
        }
    }

    /**
     * Handle mouse over event
     * @param {obect} e 
     */
    _mouseOver(e) {
        if (this.options.cursor) {
            this._changeCursor();
        }
    }

    /**
     * Change position when mouse move
     * @param {number} offsetX 
     * @param {number} offsetY 
     */
    _changePosition(offsetX, offsetY) {
        let left = this._parseStr(this.options.container.style.left);
        let top = this._parseStr(this.options.container.style.top);
        let newLeft = left - offsetX;
        let newTop = top - offsetY;
        this.options.container.style.left = newLeft + 'px';
        this.options.container.style.top = newTop + 'px';
    }

    /**
     * Reset the cursor current position
     * @param {object} e 
     */
    _resetCursor(e) {
        this.cursorX = e.clientX;
        this.cursorY = e.clientY;
    }

    /**
     * Parse string pixel to a number
     * @param {string} str 
     */
    _parseStr(str) {
        let newStr = str.replace('px', '');
        return Number(newStr);
    }

    /**
     * Get dom object from a selector
     * @param {string} selector 
     */
    _getElementBySelector(selector) {
        return document.querySelector(selector);
    }

    /**
     * Change cursor
     */
    _changeCursor() {
        if (this.options.dragZone) {
            this._getElementBySelector(this.options.dragZone).style.cursor = this.options.cursor;
        } else {
            this.options.container.style.cursor = this.options.cursor;
        }
    }

    /**
     * Adjust position when droped
     */
    _adjustPosition() {
        let minLeft = this.options.margin || this.options.margin;
        let minTop = this.options.margin || this.options.margin;
        let maxLeft = window.innerWidth - this.options.container.clientWidth - (this.options.margin || this.options.margin);
        let maxTop = window.innerHeight - this.options.container.clientHeight - (this.options.margin || this.options.margin);
        if (this._parseStr(this.options.container.style.left) < minLeft) {
            this.options.container.style.left = minLeft + 'px';
        }
        if (this._parseStr(this.options.container.style.top) < minTop) {
            this.options.container.style.top = minTop + 'px';
        }
        if (this._parseStr(this.options.container.style.left) > maxLeft) {
            this.options.container.style.left = maxLeft + 'px';
        }
        if (this._parseStr(this.options.container.style.top) > maxTop) {
            this.options.container.style.top = maxTop + 'px';
        }
    }

    /**
     * Call stop function when drag done
     */
    _dragDone() {
        if (!this.options.adjustPosition || !this.moving) {
            return;
        }
        if (this.options.enable) {
            this.moving = false;
            this.options.stop(this);
        }
        this._adjustPosition();
    }
}