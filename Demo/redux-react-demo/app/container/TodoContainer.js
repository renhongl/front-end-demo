

import { connect } from 'react-redux';
import Todo from '../component/todo/Todo';
import { addTodoAction, removeTodoAction } from '../action/todoAction';

const mapStateToProps = (state) => {
    return {
        todo: state.todo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(addTodoAction(text)),
        removeTodo: (text) => dispatch(removeTodoAction(text))
    };
};

const TodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);

export default TodoContainer;