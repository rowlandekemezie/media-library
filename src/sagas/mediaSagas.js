import { put, call } from 'redux-saga/effects';
import { flickrImages, shutterStockVideos } from '../Api/api';
import * as types from '../constants/actionTypes';


export default function* searchMediaSaga({ payload }) {
  try {
    yield put({ type: types.FETCHING_MEDIA });
    const videos = yield call(shutterStockVideos, payload);
    const images = yield call(flickrImages, payload);
    yield [
      put({ type: types.SHUTTER_VIDEOS_SUCCESS, videos }),
      put({ type: types.SELECTED_VIDEO, video: videos[0] }),
      put({ type: types.FLICKR_IMAGES_SUCCESS, images }),
      put({ type: types.SELECTED_IMAGE, image: images[0] }),
      put({ type: types.FETCHED_MEDIA })
    ];
  } catch (error) {
    yield put({ type: 'SEARCH_MEDIA_FAILURE', error });
  }
}
