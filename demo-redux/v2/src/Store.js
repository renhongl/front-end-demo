

import { createStore } from 'redux';
import Reducer from './Reducer';

const state = {
    first: 0,
    second: 10,
    third: 30
};

let store = createStore(Reducer, state);

export default store;
















