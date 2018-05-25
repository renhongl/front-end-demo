import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import store from "./Store";
import { Router, Route, Link } from "react-router-dom";
import { Tabs, Tab } from "material-ui/Tabs";
import Slider from "material-ui/Slider";
import "./share/common.css";
import HomePage from "./page/HomePage";
import MessageDetailPage from "./page/MessageDetailPage";
import createHistory from "history/createBrowserHistory";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";

const history = createHistory();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="container">
          <Route exact path="/" component={HomePage} />
          <Route path="/detail/:id" component={MessageDetailPage} />
        </div>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
