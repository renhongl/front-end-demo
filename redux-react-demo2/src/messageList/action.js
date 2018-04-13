


import * as ActionTypes from './actionType';

export const addMessage = (message) => {
    return {
        type: ActionTypes.ADD_MESSAGE,
        message,
    }
}