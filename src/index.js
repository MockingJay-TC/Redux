import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mangoReducer from "./store/reducers/mangoReducer";
import cucumberReducer from "./store/reducers/cucumberReducer";

const rootReducer = combineReducers({
  mg: mangoReducer,
  cu: cucumberReducer,
})

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
