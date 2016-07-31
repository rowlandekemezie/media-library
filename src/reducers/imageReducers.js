import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.images, action) {
  switch (action.type) {
    case types.LOAD_IMAGES_SUCCESS:
      return [...state, action.images];
    case types.SELECTED_IMAGE:
      return [...state, action.image];
    default:
      return state;
  }
}
