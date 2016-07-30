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

// export function loadImages() {
//   return function (dispatch) {
//     return mockApi.loadAllImages()
//       .then(images => {
//         dispatch(loadImageSuccess(images));
//       }).catch(error => {
//         throw(error);
//       })
//   };
// }
