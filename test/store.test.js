/**
 * Created by rowland on 8/15/16.
 */
import React from 'react';
import nock from 'nock';
import createSagaMiddleware from 'redux-saga';
import { flickrImagesAction, shutterVideosAction } from '../src/actions/mediaActions';
import configureMockStore from 'redux-mock-store';


afterEach(() => {
  nock.clearAll();
});
const FLICKR_API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const SHUTTER_CLIENT_ID = '3434a56d8702085b9226';
const SHUTTER_CLIENT_SECRET = '7698001661a2b347c2017dfd50aebb2519eda578';

const mockStore = configureMockStore([createSagaMiddleware()]);

describe('Test store', () => {
  const response = { body: { farm: 'static', server: 'admin', id: 1, secret: 'password' } };
  nock('https://api.flickr.com/')
    .get(`services/rest/?method=flickr.photos.search&text=rain&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`)
    .reply(200, response);

  const store = mockStore([]);
  const expectedValue = [{
    type: 'FLICKR_IMAGES_REQUEST'
  }, { type: 'FLICKR_IMAGES_SUCCESS' }, response];
  constl
  return store.dispatch(flickrImagesAction('rain')).then(() => {
    expect(store.getActions()).toEqual(expectedValue);
  });
});
