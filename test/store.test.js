/**
 * Created by rowland on 8/15/16.
 */
import React from 'react';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { flickrImagesAction } from '../src/actions/mediaActions';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);

describe('Test store', () => {
  it('should return dispatch action to the api', () => {
    const store = mockStore({});
    const expectedValue = {
      type: 'FLICKR_IMAGES_REQUEST',
      payload: 'rain'
    };
    store.dispatch(flickrImagesAction('rain'));
    expect(store.getActions()).toEqual([expectedValue]);
  });
});
