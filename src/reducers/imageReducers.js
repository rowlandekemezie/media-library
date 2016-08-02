import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.images, action) {
  switch (action.type) {
    case types.LOAD_IMAGES_SUCCESS:
      return [...state, action.images];
    case types.LOAD_UNSPLASH_IMAGES_SUCCESS:
      return [...state={}, action.images];
    case types.SELECTED_UNSPLASH_IMAGE:
      return {...state, selectedImage: action.image};
    case types.LOAD_IMAGES_FROM_UNSPLASH:
      return [...state, action.images];
    case types.SELECTED_IMAGE:
      return {...state, selectedImage:action.image};
    default:
      return state;
  }
}
