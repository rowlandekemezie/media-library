import expect from 'expect';
import { put, call } from 'redux-saga/effects';
import searchMediaSaga from '../src/sagas/mediaSagas';
import { flickrImages, shutterStockVideos } from '../src/Api/api';


describe('Test for searchMediaSaga', () => {
  const payload = 'test';
  const gen = searchMediaSaga({ payload });

  it('should call fetching media', () => {
    expect(gen.next(payload).value).toEqual(put({ type: 'FETCHING_MEDIA' }));
  });

  it('should call shutterStockVideos API', () => {
    expect(gen.next(payload).value).toEqual(call(shutterStockVideos, payload));
  });

  it('should call flickrImages API ', () => {
    expect(gen.next(payload).value).toEqual(call(flickrImages, payload));
  });

  it('should yield array of objects', () => {
    const videos = [];
    expect(gen.next(videos).value.length).toEqual(5);
  });

  it('should dispatch failure effect', () => {
    const error = 'error';
    expect(gen.throw(error).value).toEqual(put({ type: 'SEARCH_MEDIA_FAILURE', error }));
  });
});
