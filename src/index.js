import ReactDOM from 'react-dom';
import React from 'react';
import configStore from './stores/configureStores';
import {Provider} from 'react-redux';
import {loadImages} from './actions/imageActions';
import './styles/index.css';
import routes from './routes';
import {Router, browserHistory} from 'react-router';

const store = configStore();
store.dispatch(loadImages());
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
