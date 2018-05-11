

import { connect } from 'react-redux';
import { MessageDetailComponent } from './MessageDetailComponent';
import { Actions } from '../../messageList';
import createHistory from "history/createBrowserHistory";

const history = createHistory();

const getMessageById = (messageList, ownProps) => {
    const message = messageList.filter( (message, index) => {
        return message.id === Number(ownProps.id);
    });
    return message[0];
}

const mapStateToProps = (state, ownProps) => {
    return {
        message: getMessageById(state.messageList, ownProps)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (message) => dispatch(Actions.updateMessage(message)),
        goBack: () => history.push('/home'),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageDetailComponent);