

import { connect } from 'react-redux';
import TodoList from './todoList';
import { FilterTypes } from '../../constants';
import { removeTodo, toggleTodo } from '../actions';

const getVisibleList = (list, filter) => {
    switch(filter) {
        case FilterTypes.SHOW_ALL:
            return list;
        case FilterTypes.SHOW_COMPELETED:
            return list.filter( item => {
                return item.completed;
            });
        case FilterTypes.SHOW_UNCOMPELETED:
            return list.filter( item => {
                return !item.completed;
            });
        default:
            return list;
    }
}

const mapStateToProps = (state, ) => {
    return {
        todoList: getVisibleList(state.todoList, state.filter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);