import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import createSagaMiddleware ,{ END }from 'redux-saga'
import {createStore , applyMiddleware , compose} from 'redux'
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers'
import { logger } from 'redux-logger';
import {fromJS} from 'immutable'

const state = fromJS({
  list: [],
  validation: [],
  data: {},
  metadata: {},
  submittingForm: false,
})
function* exampleSaga() {
    console.log("Example saga reached");
  }
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;
const storeEnhancers = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(
  rootReducer /* preloadedState, */,
  state,
  storeEnhancers
);
//const store = createStore(rootReducer , applyMiddleware(sagaMiddleware , logger))
store.runSaga = sagaMiddleware.run;
store.close = () => store.dispatch(END);
store.runSaga(exampleSaga);
ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
