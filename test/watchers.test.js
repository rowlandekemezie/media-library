import expect from 'expect';
import { fork, take } from 'redux-saga/effects';
import searchMediaSaga from '../src/sagas/mediaSagas';
import watchSearchMedia from '../src/sagas/watchers';

describe('Test for watchLoadFlickrImages', () => {

  describe('Test for watchSearchMedia', () => {
    it('should call searchMediaSaga', () => {
      const gen = watchSearchMedia();
      const action = { type: 'SEARCH_MEDIA_REQUEST' };
      expect(gen.next().value).toEqual(take('SEARCH_MEDIA_REQUEST'));
      expect(gen.next(action).value).toEqual(fork(searchMediaSaga, action));
    });
  });
});
