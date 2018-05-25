

import { CreateMessageComponent } from './CreateMessageComponent';
import { connect } from 'react-redux';
import { Actions } from '../../messageList';
import createHistory from "history/createBrowserHistory"

const history = createHistory()

const mapStateToProps = (state) => {
    return {
        userInfor: state.userInfor,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createMessage: message => dispatch(Actions.createMessage(message)),
        goHome: () => {
            ownProps.goHome();
        },
        goLogin: () => {
            ownProps.goLogin();
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateMessageComponent);