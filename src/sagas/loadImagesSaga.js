import 'babel-polyfill';
import {put, call} from 'redux-saga/effects';
import {delay} from 'redux-saga'; //takeEvery is a high-level API built using take and fork
import {flickrImages, shutterImage, unsplashImages} from '../Api/flickr';
import * as types from '../constants/actionTypes'


export function* loadUnsplashedImages(action) {
  try {
    const images = yield call(unsplashImages, action.payload);
    yield [
      put({type: types.UNSPLASH_IMAGES_SUCCESS, images}),
      put({type: types.SELECTED_IMAGE, image: images[0]})
    ]
  } catch (error) {
    yield put({type: 'LOAD_IMAGES_ERROR', error})
  }
}

export function* loadflickrImages() {
  try {
    yield call(delay, 1000);
    const images = yield call(flickrImages);
    yield put({type: types.FLICKR_IMAGES_SUCCESS, images});
    yield put({type: types.SELECTED_IMAGE, image: images[0]});
  } catch (error) {
    yield put({type: 'LOAD_IMAGES_ERROR', error})
  }
}
