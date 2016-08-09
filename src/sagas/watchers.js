import { takeEvery } from 'redux-saga';
import { loadFlickrImagesSaga, searchMediaSaga } from './loadImagesSaga';
import * as types from '../constants/actionTypes';

export function* watchLoadFlickrImages() {

  while (true) {
    yield* takeEvery(types.FLICKR_IMAGES_REQUEST, loadFlickrImagesSaga);
  }
}

export function* watchSearchMedia() {
  while (true) {
    yield* takeEvery(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
  }
}
