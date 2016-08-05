import React from 'react';
import Gallery from  './containers/GalleryContainer';
<<<<<<< HEAD
import App from './containers/App';
=======
import App from './App';
>>>>>>> d2ba82006f840048bc061ee12396187aa5b6f662
import HomePage from './components/HomePage';
import {Route, IndexRoute} from 'react-router';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="images" component={Gallery}/>
  </Route>
);

