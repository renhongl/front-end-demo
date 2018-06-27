

import * as ActionTypes from './actionTypes';

export default (weather = {}, action) => {
    switch(action.type) {
        case ActionTypes.UPDATE_WEATHER:
            return action.data;
        default:
            return weather;
    }
}