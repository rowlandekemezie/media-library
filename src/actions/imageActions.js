import * as types from '../constants/actionTypes';
//import mockApi from '../Api/mockApi';

export function loadImages() {
  return {
    type: types.LOAD_IMAGES_REQUEST
  }
}

export function selectedImage(image) {
  return {
    type: types.SELECTED_IMAGE,
    image
  }
}
