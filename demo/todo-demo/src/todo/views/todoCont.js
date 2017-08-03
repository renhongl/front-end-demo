


import { connect } from 'react-redux';
import todoComp from './todoComp';
import { addTodo, toggleTodo, removeTodo } from '../actions';

const setVisibleList = (todoList, filter) => {
    switch(filter) {
        case '全部':
            return todoList;
        case '完成':
            return todoList.filter((v, k) => {
                return v.completed;
            });
        case '未完成':
            return todoList.filter((v, k) => {
                return !v.completed;
            });
        default: 
            return '';
    }
}

const mapStateToProps = (state) => {
    return {
        todoList: setVisibleList(state.todoList, state.filter)
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        addTodo: (text) => {
            dispatch(addTodo(text));
        },
        removeTodo: (id) => {
            dispatch(removeTodo(id));
        },
        toggleTodo: (id) =>{
            dispatch(toggleTodo(id));
        }
    }
}
    
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(todoComp);