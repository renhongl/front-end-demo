

import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import TodoItem from './todoItem';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (id) => {
            dispatch(toggleTodo(id));
        },
        removeTodo: (id) => {
            dispatch(removeTodo(id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoItem);

