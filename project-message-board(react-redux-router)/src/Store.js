import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Reducer as messageListReducer } from "./component/messageList";
import { Reducer as userInforReducer } from './component/userInfor';
import createHistory from 'history/createBrowserHistory';
import { Reducer as commentListReducer } from './component/commentList';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import messageList from './assets/messageList.json'
import commentList from './assets/commentList.json';

const history = createHistory()

const middleware = routerMiddleware(history)

const reducer = combineReducers({
  messageList: messageListReducer,
  userInfor: userInforReducer,
  commentList: commentListReducer,
  router: routerReducer
});

const initState = {
  messageList,
  commentList,
};

export default createStore(reducer,initState, applyMiddleware(middleware));
