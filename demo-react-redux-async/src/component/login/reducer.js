

import * as ActionTypes from './actionTypes';

export default (login = {}, action) => {
    debugger;
    switch(action.type) {
        case ActionTypes.UPDATE_LOGIN:
            return action.login;
        default:
            return login;
    }
}









