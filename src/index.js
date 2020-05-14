import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./Components/App";
// Todo
// import "./assets/bootstrap/customVariables.scss";
// import "./assets/css/styles.scss";

import reducers from "./store/reducers/index";

//for redux devtools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));



ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);