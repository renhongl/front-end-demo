

import { MessageListComponent } from './MessageListComponent';
import { connect } from 'react-redux';
import * as Actions from '../action';

const mapStateToProps = (state) => {
    return {
        items: state.messageList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: message => dispatch(Actions.addMessage(message)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageListComponent);