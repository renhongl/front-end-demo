


import * as ActionTypes from './actionType';

const updateMessage = (messageList, action) => {
    let newMessageList = [...messageList];
    for(let [key, message] of newMessageList.entries()) {
        if (message.id === action.message.id) {
            newMessageList[key] = action.message;
        }
    }
    return newMessageList;
}

const deleteMessage = (messageList, action) => {
    let newMessageList = [...messageList];
    for(let [key, message] of newMessageList.entries()) {
        if (message.id === action.id) {
            newMessageList.splice(key, 1);
        }
    }
    return newMessageList;
}

export default (messageList = [], action) => {
    switch(action.type) {
        case ActionTypes.CREATE_MESSAGE:
            return [...messageList, action.message];
        case ActionTypes.UPDATE_MESSAGE: 
            return updateMessage(messageList, action);
        case ActionTypes.DELETE_MESSAGE:
            return deleteMessage(messageList, action);
        default:
            return messageList;
    }
}