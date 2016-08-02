import * as types from '../constants/actionTypes';
//import mockApi from '../Api/mockApi';

export function loadFlickrImages() {
  return {
    type: types.LOAD_IMAGES_FROM_FLICKR
  }
}

export function selectedImage(image) {
  return {
    type: types.SELECTED_IMAGE,
    image
  }
}
export function unsplashAction(query_params) {
  return {
    type: types.LOAD_IMAGES_FROM_UNSPLASH,
    query_params
  }
}
