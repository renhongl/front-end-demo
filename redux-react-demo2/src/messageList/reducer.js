


import * as ActionTypes from './actionType';

export default (state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADD_MESSAGE:
            return [...state, action.message];
        default:
            return state;
    }
}