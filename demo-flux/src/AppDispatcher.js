



import { Dispatcher } from 'flux';
import { TodoStore } from './TodoStore';
import * as ActionTypes from './ActionType';

const AppDispatcher = new Dispatcher();

AppDispatcher.register((action) => {
    switch(action.type) {
        case ActionTypes.ADD_NEW_ITEM:
            TodoStore.addNewItemHandler(action.text);
            TodoStore.emitChange();
            break;
        default:
            break;
    }
});


export default AppDispatcher;