import Tool from '../core/Tool';

const todoList = function (todoList = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            let newState = todoList.concat([]);
            newState.push(action.payload);
            return newState;
        default:
            return todoList;
    }
};

export default todoList;