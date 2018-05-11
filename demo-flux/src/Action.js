




import * as ActionTypes from './ActionType';
import AppDispatcher from './AppDispatcher';

export const addNewItem = (text) => {
    AppDispatcher.dispatch({
        type: ActionTypes.ADD_NEW_ITEM,
        text,
    });
};








