


import * as ActionTypes from './actionType';

export const createMessage = (message) => {
    return {
        type: ActionTypes.CREATE_MESSAGE,
        message,
    }
}

export const updateMessage = (message) => {
    return {
        type: ActionTypes.UPDATE_MESSAGE,
        message,
    }
}

export const deleteMessage = (message) => {
    return {
        type: ActionTypes.DELETE_MESSAGE,
        message,
    }
}