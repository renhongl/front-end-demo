
import { connect } from 'react-redux';
import Link from './link';
import { setFilter } from '../actions';

const mapStateToProps = (state, link) => {
    return {
        active: state.filter !== link.children
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (filter) => {
            dispatch(setFilter(filter));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

