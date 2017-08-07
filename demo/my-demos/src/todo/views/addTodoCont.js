

import { connect } from 'react-redux';
import AddTodo from './addTodo';
import { addTodo } from '../actions';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => {
            dispatch(addTodo(text))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)