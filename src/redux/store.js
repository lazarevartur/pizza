import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./index";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

window.store = store

export default store;