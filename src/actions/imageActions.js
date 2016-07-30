import * as types from '../constants/actionTypes';
import mockApi from '../api/mockApi';

export function loadImageSuccess(images) {
  return {
    type: types.LOAD_IMAGE_SUCCESS,
    images
  }
}

export function loadImages() {
  return function (dispatch) {
    return mockApi.loadAllImages()
      .then(images => {
        dispatch(loadImageSuccess(images));
      }).catch(error => {
        throw(error);
      })
  };
}
