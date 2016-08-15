import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga'; // takeEvery is a high-level API built using take and fork
import { flickrImages, shutterStockVideos } from '../Api/api';
import * as types from '../constants/actionTypes';


export function* searchMediaSaga({ payload }) {
  try {
    const videos = yield call(shutterStockVideos, payload);
    const images = yield call(flickrImages, payload);
    yield [
      put({ type: types.SHUTTER_VIDEOS_SUCCESS, videos }),
      put({ type: types.SELECTED_VIDEO, video: videos[0] }),
      put({ type: types.FLICKR_IMAGES_SUCCESS, images }),
      put({ type: types.SELECTED_IMAGE, image: images[0] })
    ];
  } catch (error) {
    yield put({ type: 'SEARCH_MEDIA_FAILURE', error });
  }
}

export function* loadFlickrImagesSaga({ payload }) {
  try {
    yield call(delay, 1000);
    const images = yield call(flickrImages, payload);
    yield [
      put({ type: types.FLICKR_IMAGES_SUCCESS, images }),
      put({ type: types.SELECTED_IMAGE, image: images[0] })
    ];
  } catch (error) {
    yield put({ type: 'LOAD_IMAGES_FAILURE', error });
  }
}

export function* loadShutterVideosSaga({ payload }) {
  try {
    yield call(delay, 1000);
    const videos = yield call(shutterStockVideos, payload);
    yield [
      put({ type: types.SHUTTER_VIDEOS_SUCCESS, videos }),
      put({ type: types.SELECTED_VIDEO, video: videos[0] })
    ];
  } catch (error) {
    yield put({ type: 'LOAD_VIDEOS_FAILURE', error });
  }
}
