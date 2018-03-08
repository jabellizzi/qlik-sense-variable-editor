// ========= React/Redux =========
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';

// ========= Resources =========
import rootReducer from './ducks/rootReducer';
import rootEpic from './ducks/rootEpic';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
