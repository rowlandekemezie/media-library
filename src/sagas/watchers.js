import {loadflickrImages, loadUnsplashedImages} from './loadImagesSaga';
import * as types from '../constants/actionTypes';
// import {take} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';

export function* watchLoadFlickrImages() {
  while (true) {
    yield* takeEvery(types.FLICKR_IMAGES_REQUEST, loadflickrImages);
  }
}

export function* watchLoadUnsplashImages() {
  while(true){
    yield* takeEvery(types.UNSPLASH_IMAGES_REQUEST, loadUnsplashedImages);
  }
}
