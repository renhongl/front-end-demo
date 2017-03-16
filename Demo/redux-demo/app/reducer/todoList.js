import Tool from '../core/Tool';

const todoList = function (state = [], action) {
    let list = state.concat([]);
    switch (action.type) {
        case 'ADD_TODO':
            return list.push(action.payload);
        case 'REMOVE_TODO':
            let index = Number(action.payload);
            list.splice(index, 1);
            return list;
        default:
            return state;
    }
};

export default todoList;