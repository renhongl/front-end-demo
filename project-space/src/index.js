import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import store from "./Store";
import { Router, Route, Link } from "react-router-dom";
import "./share/common.css";
import HomePage from "./page/HomePage";
import MomentPage from './page/MomentPage';
import createHistory from "history/createBrowserHistory";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
// import 'semantic-ui-css/semantic.min.css';

const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="container">
          <Route exact path="/" component={HomePage} />
          <Route path="/moment" component={MomentPage} />
        </div>
      </ConnectedRouter>
    </Provider>,
  document.getElementById("root")
);
