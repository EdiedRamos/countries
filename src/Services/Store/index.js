import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { themeReducer, listReducer } from "./Reducers";

const reducers = combineReducers({
  themeReducer,
  listReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
