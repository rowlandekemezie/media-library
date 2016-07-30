import 'babel-polyfill' // Allows you to use generators since they're not native to ES6
import {take, put, fork} from 'redux-saga/effects';
import {fetchImages} from '../Api/flickr';


export function* loadImages() {
  try {
    const images = yield fetchImages();
    yield put({type: 'LOAD_IMAGES_SUCCESS', images});
    yield put({type: 'SELECTED_IMAGE', image: images[0]});
  } catch (error) {
    yield put({type: 'LOAD_IMAGES_ERROR'}, error)
  }
}

/**
 * @description Express non-blocking calls to loadImages function generator
 * @return
 */
export function* watchLoadImages() {
  while (true) {
    yield take('LOAD_IMAGES_REQUEST');
    yield fork(loadImages);
  }
}
