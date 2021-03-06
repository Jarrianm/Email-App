//rendering root component to the dom/redux
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(
  <Provider store={store}>
    {" "}
    <App />
  </Provider>,
  document.querySelector("#root")
);
console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY)
console.log('ENVIRONMENT IS ', process.env.NODE_ENV)