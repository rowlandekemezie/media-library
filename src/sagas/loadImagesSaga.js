import 'babel-polyfill';
import {put, call} from 'redux-saga/effects';
import {takeEvery, delay} from 'redux-saga'; //takeEvery is a high-level API built using take and fork
import {flickrImages, shutterImage, unsplashImage} from '../Api/flickr';
import * as types from '../constants/actionTypes'


export function* loadUnsplashedImages(query_params='rain') {
  try {
    yield call(delay, 1000);
    const images = yield call(unsplashImage(query_params));
    yield put({type: types.LOAD_IMAGES_SUCCESS, images});
    yield put({type: types.SELECTED_IMAGE, image: images[0]});
  } catch (error) {
    yield put({type: 'LOAD_IMAGES_ERROR', error})
  }
}
export function* loadflickrImages() {
  try {
    yield call(delay, 1000);
    const images = yield call(flickrImages);
    yield put({type: types.LOAD_IMAGES_SUCCESS, images});
    yield put({type: types.SELECTED_IMAGE, image: images[0]});
  } catch (error) {
    yield put({type: 'LOAD_IMAGES_ERROR', error})
  }
}

export function* watchLoadImages() {
  while (true) {
    yield* takeEvery(types.LOAD_IMAGES_FROM_FLICKR, loadflickrImages);
    yield* takeEvery(types.LOAD_IMAGES_FROM_UNSPLASH, loadUnsplashedImages, query_params); // takeEvery allows multiple instances of loadImages to start concurrently
  }
}
