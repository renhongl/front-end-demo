import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Reducer as messageListReducer } from "./component/messageList";
import { Reducer as userInforReducer } from './component/userInfor';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import messageList from './asset/messageList.json'

const history = createHistory()

const middleware = routerMiddleware(history)

const reducer = combineReducers({
  messageList: messageListReducer,
  userInfor: userInforReducer,
  router: routerReducer
});

const initState = {
  messageList,
};

export default createStore(reducer,initState, applyMiddleware(middleware));
