import { takeLatest } from 'redux-saga';
import { loadFlickrImagesSaga, loadShutterVideosSaga, searchMediaSaga } from './mediaSagas';
import * as types from '../constants/actionTypes';

export function* watchLoadFlickrImages() {
  yield* takeLatest(types.FLICKR_IMAGES_REQUEST, loadFlickrImagesSaga);
}

export function* watchLoadShutterVideos() {
  yield* takeLatest(types.SHUTTER_VIDEOS_REQUEST, loadShutterVideosSaga);
}

export function* watchSearchMedia() {
  yield* takeLatest(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
}
