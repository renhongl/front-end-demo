

import { connect } from 'react-redux';
import Navigation from './navigation';
import { changeDemo } from '../actions';

const mapStateToProps = (state) => {
    return {
        gameList: state.gameList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeDemo: (url) => {
            dispatch(changeDemo(url));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);