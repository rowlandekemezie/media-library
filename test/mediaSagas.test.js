import expect from 'expect';
import { delay } from 'redux-saga'
import { put, take, call, fork } from 'redux-saga/effects';
import { loadFlickrImagesSaga, loadShutterVideosSaga, searchMediaSaga } from '../src/sagas/mediaSagas';
import { flickrImages, shutterStockVideos } from '../src/Api/api';

describe('Test for searchMediaSaga', () => {
  const payload = 'test';
  const gen = searchMediaSaga({ payload });
  it('should call shutterStockVideos API', () => {
    expect(gen.next(payload).value).toEqual(call(shutterStockVideos, payload));
  });
  it('should call flickrImages API ', () => {
    expect(gen.next(payload).value).toEqual(call(flickrImages, payload));
  });
  it('should yield array of objects', () => {
    const videos = [];
    expect(gen.next(videos).value.length).toEqual(4);
  });
  it('should dispatch failure effect', () => {
    const error = 'error';
    expect(gen.throw(error).value).toEqual(put({ type: 'SEARCH_MEDIA_FAILURE', error }));
  });
});

describe('Test for loadflickrImagesSaga', () => {
  const payload = 'test';
  const gen = loadFlickrImagesSaga({ payload });
  it('should call delay', () => {
    expect(gen.next().value).toEqual(call(delay, 1000));
  });
  it('should call flickr API with payload', () => {
    expect(gen.next().value).toEqual(call(flickrImages, payload));
  });
  it('should yield array of action objects', () => {
    const images = [];
    expect(gen.next(images).value.length).toEqual(2);
  });
  it('should dispatch failure effect', () => {
    const error = 'error';
    expect(gen.throw(error).value).toEqual(put({ type: 'LOAD_IMAGES_FAILURE', error }));
  });
});

describe('Test for loadSutterVideosSaga', () => {
  const payload = 'test';
  const gen = loadShutterVideosSaga({ payload });
  it('should call delay', () => {
    expect(gen.next().value).toEqual(call(delay, 1000));
  });
  it('should call ShutterStock API with payload', () => {
    expect(gen.next().value).toEqual(call(shutterStockVideos, payload));
  });
  it('should yield array of action objects', () => {
    const videos = [];
    expect(gen.next(videos).value.length).toEqual(2);
  });
  it('should dispatch failure effect', () => {
    const error = 'error';
    expect(gen.throw(error).value).toEqual(put({ type: 'LOAD_VIDEOS_FAILURE', error }));
  });
});
