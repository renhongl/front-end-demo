
import { extend } from '../tool.js';

export default class DatePicker {
    constructor(options) {
        this.background = document.createElement('div');
        this.container = document.createElement('div');
        this.monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.valueContainer = document.createElement('div');
        this.monthContainer = document.createElement('div');
        this.dayContainer = document.createElement('div');
        this.dayContainer.setAttribute('class', 'mr-date-picker-day-container');
        this.monthSpan = document.createElement('span');
        this.background.setAttribute('class', 'mr-date-picker-background');
        document.body.appendChild(this.background);
        this.background.appendChild(this.container);
        this.className = 'mr-date-picker'
        this.options = {};
        this.options = extend(this.options, options);
        this.options.container = this.container;
        this._init();
    }

    _init() {
        let dateStr = this.options.defaultDate || new Date().toLocaleDateString();
        this.date = new Date(dateStr);
        this._parseDate();
        this._render();
        this.background.onclick = function () {
            this.background.parentNode.removeChild(this.background);
        }.bind(this);
        this.container.onclick = function (e) {
            e.stopPropagation();
        }
    }

    _render() {
        this.options.container.setAttribute('class', this.className);
        this.monthContainer.innerHTML = '';
        let beforeBtn = document.createElement('button');
        let afterBtn = document.createElement('button');
        beforeBtn.setAttribute('class', 'mr-date-picker-month-before');
        afterBtn.setAttribute('class', 'mr-date-picker-month-after');
        this.monthContainer.appendChild(beforeBtn);
        this.monthContainer.appendChild(afterBtn);
        this.monthContainer.insertBefore(this.monthSpan, this.monthContainer.childNodes[1]);
        this.monthContainer.setAttribute('class', 'mr-date-picker-header');
        this.options.container.insertBefore(this.monthContainer, this.options.container.childNodes[1]);
        beforeBtn.onclick = function (e) {
            this._rain(e);
            this._changeMonth(false);
        }.bind(this);
        afterBtn.onclick = function (e) {
            this._rain(e);
            this._changeMonth(true);
        }.bind(this);
        this._renderValue();
        // this._renderYear();
        this._renderMonth();
        this._renderWeek();
        this.options.container.appendChild(this.dayContainer);
        this._renderDay(true);
        this._renderFooter();
    }

    _renderFooter() {
        let div = document.createElement('div');
        div.setAttribute('class', 'mr-date-picker-footer');
        let okBtn = document.createElement('span');
        okBtn.setAttribute('class', 'mr-date-picker-ok-btn');
        okBtn.innerText = 'OK';
        div.appendChild(okBtn);
        this.options.container.appendChild(div);
        okBtn.onclick = function (e) {
            this._rain(e);
            this.background.parentNode.removeChild(this.background);
            this.options.e.target.value = this.date.toLocaleDateString();
            console.log(this.date.toLocaleDateString());
        }.bind(this);
    }

    _renderValue() {
        this.valueContainer.innerHTML = '';
        let yearP = document.createElement('p');
        let monthP = document.createElement('p');
        let dayP = document.createElement('p');
        dayP.style.transform = 'translateY(100%)';
        dayP.style.opacity = 0;
        monthP.style.transform = 'translateX(100%)';
        monthP.style.opacity = 0;
        yearP.style.transform = 'translateX(-100%)';
        yearP.style.opacity = 0;
        this.valueContainer.setAttribute('class', 'mr-date-picker-value');
        yearP.setAttribute('class', 'mr-date-picker-year-p');
        monthP.setAttribute('class', 'mr-date-picker-month-p');
        dayP.setAttribute('class', 'mr-date-picker-day-p');
        yearP.innerText = this.year;
        monthP.innerText = this.monthArr[this.month].substring(0, 3);
        dayP.innerText = this.day;
        this.valueContainer.appendChild(yearP);
        this.valueContainer.appendChild(monthP);
        this.valueContainer.appendChild(dayP);
        this.options.container.insertBefore(this.valueContainer, this.options.container.childNodes[0]);
        setTimeout(function () {
            dayP.style.transform = 'translateY(0%)';
            dayP.style.opacity = 1;
            monthP.style.transform = 'translateY(0%)';
            monthP.style.opacity = 1;
            yearP.style.transform = 'translateY(0%)';
            yearP.style.opacity = 1;
        }.bind(this), 100);
    }

    _fromWeek(date, day) {
        let result = day - (date % 7 - 1);
        let re = result < 0 ? 7 + result : result;
        return re;
    }

    _renderDay(right) {
        let rights = document.querySelectorAll('.mr-date-picker-right-day');
        Array.prototype.slice.call(rights).forEach(function (item, i) {
            if (right) {
                item.style.transform = 'translateX(-100%)';
            } else {
                item.style.transform = 'translateX(100%)';
            }
        });
        setTimeout(function () {
            this.dayContainer.innerHTML = '';
            let number = this._getDays(this.month);
            let fromWeek = this._fromWeek(this.day, this.date.getDay());
            let row = Math.ceil((number + fromWeek) / 7);
            let index = 1;
            for (let i = 0; i < row; i++) {
                let dayRow = document.createElement('div');
                dayRow.setAttribute('class', 'mr-date-picker-right mr-date-picker-right-day');
                if (right) {
                    dayRow.style.transform = 'translateX(100%)';
                } else {
                    dayRow.style.transform = 'translateX(-100%)';
                }
                for (let j = 0; j < 7; j++) {
                    let span = document.createElement('span');
                    if (index >= fromWeek + 1 && index < number + fromWeek + 1) {
                        if (index - fromWeek === Number(this.day)) {
                            span.setAttribute('class', 'mr-date-picker-day mr-date-picker-day-active');
                        } else {
                            span.setAttribute('class', 'mr-date-picker-day');
                        }
                        span.onclick = function (e) {
                            this._rain(e);
                            this._clickDay(span);
                        }.bind(this);
                        span.innerText = index - fromWeek;
                    } else {
                        span.setAttribute('class', 'mr-date-picker-day-empty');
                        span.innerText = '0';
                    }
                    index++;
                    dayRow.appendChild(span);

                }
                this.dayContainer.appendChild(dayRow);
                setTimeout(function () {
                    dayRow.style.transform = 'translateX(0%)';
                }, 100);
            }
        }.bind(this), 100);
    }

    _clickDay(span) {
        let days = document.querySelectorAll('.mr-date-picker-day');
        Array.prototype.slice.call(days).forEach((item, i) => {
            item.setAttribute('class', 'mr-date-picker-day');
        });
        span.setAttribute('class', 'mr-date-picker-day mr-date-picker-day-active');
        this.day = span.innerText;
        this.date.setDate(Number(this.day));
        this._parseDate();
        this._renderValue();
        this._renderMonth();

    }

    _renderWeek() {
        let weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', ' Fri', 'Sat'];
        let weekRow = document.createElement('div');
        weekRow.setAttribute('class', 'mr-date-picker-right mr-date-picker-right-week');
        for (let i = 0; i < 7; i++) {
            let span = document.createElement('span');
            span.innerText = weeks[i];
            span.setAttribute('class', 'mr-date-picker-week');
            weekRow.appendChild(span);
        }
        this.options.container.appendChild(weekRow);
    }

    _getDays(month) {
        if (typeof month !== 'number') {
            month = Number(month);
        }
        month++;
        let bigMonth = [1, 3, 5, 7, 8, 10, 12];
        let middleMonth = [4, 6, 9, 11];
        if (bigMonth.indexOf(month) !== -1) {
            return 31;
        } else if (middleMonth.indexOf(month) !== -1) {
            return 30;
        } else {
            return this.isLeapYear ? 29 : 28;
        }
    }

    _renderMonth() {
        this.monthContainer.removeChild(this.monthSpan);
        this.monthSpan = document.createElement('span');
        this.monthSpan.innerText = this.monthArr[this.month] + '  ' + this.year;
        this.monthContainer.insertBefore(this.monthSpan, this.monthContainer.childNodes[1]);
    }

    _changeMonth(plus) {
        if (plus) {
            this.date.setMonth(this.date.getMonth() + 1);
        } else {
            this.date.setMonth(this.date.getMonth() - 1);
        }
        this._parseDate();
        this._renderValue();
        this._renderMonth();
        this._renderDay(plus);
    }

    _renderYear() {
        let div = document.createElement('div');
        div.innerText = this.year;
        this.options.container.appendChild(div);
    }

    _rain(e) {
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

    _parseDate() {
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth();
        this.day = this.date.getDate();
        this.week = this.date.getDay();
        this.isLeapYear = this._isLeapYear(this.year);
    }

    _isLeapYear(year) {
        if (typeof year !== 'number') {
            year = Number(year);
        }
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false
            }
        } else {
            if (year % 4 === 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}

