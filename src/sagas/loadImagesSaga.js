import 'babel-polyfill';
import {put, call} from 'redux-saga/effects';
import {takeEvery, delay} from 'redux-saga'; //takeEvery is a high-level API built using take and fork
import {fetchImages} from '../Api/flickr';
import * as types from '../constants/actionTypes'


export function* loadImages() {
  try {
    yield call(delay, 1000);
    const images = yield call(fetchImages);
    yield put({type: types.LOAD_IMAGES_SUCCESS, images});
    yield put({type: types.SELECTED_IMAGE, image: images[0]});
  } catch (error) {
    yield put({type: 'LOAD_IMAGES_ERROR', error})
  }
}

export function* watchLoadImages() {
  while (true) {
    yield* takeEvery(types.LOAD_IMAGES_REQUEST, loadImages); // takeEvery allows multiple instances of loadImages to start concurrently
  }
}
