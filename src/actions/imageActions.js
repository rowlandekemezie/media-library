import * as types from '../constants/actionTypes';

export function flickrImagesAction() {
  return {
    type: types.FLICKR_IMAGES_REQUEST
  }
}

export function selectImageAction(image) {
  return {
    type: types.SELECTED_IMAGE,
    image
  }
}

export function unsplashImagesAction(payload) {
  return {
    type: types.UNSPLASH_IMAGES_SUCCESS,
    payload
  }
}

export function searchMediaAction(payload) {
  return {
    type: types.SEARCH_MEDIA_REQUEST,
    payload
  }
}

