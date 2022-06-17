import {
  compose,
  createStore,
  applyMiddleware
} from "redux";

import rootReducer from "./root-reducer";

import logger from "redux-logger";

// root-reducer
const middlewares = [logger];
const composedEnhancer = compose(applyMiddleware(...middlewares))

const store = createStore(rootReducer, undefined, composedEnhancer);

export default store;