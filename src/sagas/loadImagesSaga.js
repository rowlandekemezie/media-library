import 'babel-polyfill';
import {put, call} from 'redux-saga/effects';
import { delay} from 'redux-saga'; //takeEvery is a high-level API built using take and fork
import {flickrImages, shutterImage, unsplashImage} from '../Api/flickr';
import * as types from '../constants/actionTypes'


export function* loadUnsplashedImages() {
  try {
    yield call(delay, 1000);
    const payload = yield put({type: types.LOAD_IMAGES_FROM_UNSPLASH});
    const images = yield call(unsplashImage, payload.query_params);
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
