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

export function searchMediaAction(payload) {
  return {
    type: types.SEARCH_MEDIA_REQUEST,
    payload
  }
}

