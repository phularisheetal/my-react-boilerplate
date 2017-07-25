import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Root from './components/root';
import reducers from './reducers';
import styles from '../styles/style.css'
import { BrowserRouter } from 'react-router-dom'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <BrowserRouter><Provider store={createStoreWithMiddleware(reducers)}>
    <Root />
  </Provider></BrowserRouter>
  , document.querySelector('.container'));
