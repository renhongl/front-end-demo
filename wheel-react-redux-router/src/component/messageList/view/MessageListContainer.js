

import { MessageListComponent } from './MessageListComponent';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import store from '../../../Store';
import { routerMiddleware, push } from 'react-router-redux'

const history = createHistory();

const mapStateToProps = (state) => {
    return {
        items: state.messageList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goDetail: (id) => {
            store.dispatch(push(`/detail/${id}`))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageListComponent);