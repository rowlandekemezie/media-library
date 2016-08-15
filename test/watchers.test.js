import expect from 'expect';
import { fork, take } from 'redux-saga/effects';
import { loadFlickrImagesSaga, loadShutterVideosSaga,
  searchMediaSaga } from '../src/sagas/mediaSagas';
import { watchLoadFlickrImages, watchLoadShutterVideos,
  watchSearchMedia } from '../src/sagas/watchers';

describe('Test for watchLoadFlickrImages', () => {
  it('should call loadFlickrImagesSaga', () => {
    const gen = watchLoadFlickrImages();
    const action = { type: 'FLICKR_IMAGES_REQUEST' };
    expect(gen.next().value).toEqual(take('FLICKR_IMAGES_REQUEST'));
    expect(gen.next(action).value).toEqual(fork(loadFlickrImagesSaga, action));
  });
});

describe('Test for watchLoadShutterVideos', () => {
  it('should call loadShutterVideosSaga', () => {
    const gen = watchLoadShutterVideos();
    const action = { type: 'SHUTTER_VIDEOS_REQUEST' };
    expect(gen.next().value).toEqual(take('SHUTTER_VIDEOS_REQUEST'));
    expect(gen.next(action).value).toEqual(fork(loadShutterVideosSaga, action));
  });
});

describe('Test for watchSearchMedia', () => {
  it('should call loadFlickrImagesSaga', () => {
    const gen = watchSearchMedia();
    const action = { type: 'SEARCH_MEDIA_REQUEST' };
    expect(gen.next().value).toEqual(take('SEARCH_MEDIA_REQUEST'));
    expect(gen.next(action).value).toEqual(fork(searchMediaSaga, action));
  });
});
