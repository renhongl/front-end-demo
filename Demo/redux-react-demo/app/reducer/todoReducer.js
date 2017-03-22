

const todoReducer = (todo = [], action) => {
    let newTodo = todo.concat([]);
    switch(action.type){
        case 'ADD_TODO':
            newTodo.push(action.text);
            return newTodo;
        case 'REMOVE_TODO':
            newTodo.splice(action.text, 1);
            return newTodo;
        default:
            return todo;
    }
};

export default todoReducer;