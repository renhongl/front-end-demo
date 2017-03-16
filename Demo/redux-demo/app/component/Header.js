/**
 * 
 */
import kios from '../images/logo.jpg';
import '../style/header.css';
import headerHTML from '../template/header.html';
import { updateTime } from '../action/headerAction';
import { store, state } from '../store/store';

export default class Header {
    constructor() {
        let header = document.createElement('header');
        header.innerHTML = headerHTML;
        document.body.appendChild(header);
        document.querySelector('.header-logo').setAttribute('src', kios);
        this._addEvent();
        this._render(state);
    }

    _addEvent() {
        let unsubscribe = store.subscribe(() => {
            this._render(store.getState());
        });
        setInterval(() => {
            store.dispatch(updateTime('update'));
        }, 1000);
    }

    _render(state) {
        let headerTime = document.querySelector('.header-time');
        headerTime.innerText = state.time.toTimeString().split(' ')[0];
    }
}