

import DemoFilter from './demoFilter';
import { connect } from 'react-redux';
import { changeDemoFilter } from '../actions';

const mapStateToPorps = (state) => {
    return {
        filter: state.demoFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeDemoFilter: (filter) => {
            dispatch(changeDemoFilter(filter))
        }
    }
}

export default connect(
    mapStateToPorps,
    mapDispatchToProps
)(DemoFilter)