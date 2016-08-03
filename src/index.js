import ReactDOM from 'react-dom';
import React from 'react';
import {configureStore} from './stores/configureStores';
import {Provider} from 'react-redux';
import {flickrImagesAction, unsplashImagesAction} from './actions/imageActions';
import './styles/index.css';
import routes from './routes';
import {Router, browserHistory} from 'react-router';

const store = configureStore();
store.dispatch(flickrImagesAction());
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
