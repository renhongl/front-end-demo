



import { connect } from 'react-redux';
import * as Actions from './actions';
import Login from './view';

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateLogin: login => {
            dispatch(Actions.fetchLoginApi(login))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);