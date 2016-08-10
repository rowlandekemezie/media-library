import ReactDOM from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStores';
import { flickrImagesAction } from './actions/mediaActions';
import './styles/index.css';
import routes from './routes';

const store = configureStore();
store.dispatch(flickrImagesAction());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);
