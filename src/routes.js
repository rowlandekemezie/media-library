import React from 'react';
import Gallery from  './containers/GalleryContainer';
import App from './App';
import HomePage from './components/HomePage';
import {Route, IndexRoute} from 'react-router';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="images" component={Gallery} />
    </Route>
);

