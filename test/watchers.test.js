import expect from 'expect';
import { fork, take, takeLatest } from 'redux-saga/effects';
import searchMediaSaga from '../src/sagas/mediaSagas';
import watchSearchMedia from '../src/sagas/watchers';


describe('Test for watchSearchMedia', () => {
  it('should call searchMediaSaga', () => {
    const gen = watchSearchMedia();
    expect(gen.next().value).toEqual(takeLatest('SEARCH_MEDIA_REQUEST', searchMediaSaga));
  });
});
