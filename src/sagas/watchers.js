import { takeEvery } from 'redux-saga';
import { loadFlickrImagesSaga, loadShutterVideosSaga, searchMediaSaga } from './loadImagesSaga';
import * as types from '../constants/actionTypes';

export function* watchLoadFlickrImages() {
  yield* takeEvery(types.FLICKR_IMAGES_REQUEST, loadFlickrImagesSaga);
}

export function* watchLoadShutterVideos() {
  yield* takeEvery(types.SHUTTER_VIDEOS_REQUEST, loadShutterVideosSaga);
}

export function* watchSearchMedia() {
  yield* takeEvery(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
}
