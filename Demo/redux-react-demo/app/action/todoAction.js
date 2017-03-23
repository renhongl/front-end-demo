

export const addTodoAction = (text) => {
    return {
        type: 'ADD_TODO',
        text
    };
};

export const removeTodoAction = (text) => {
    return {
        type: 'REMOVE_TODO',
        text
    };
};
