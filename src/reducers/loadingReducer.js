import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.loading, action) {
  switch (action.type) {
    case types.FETCHING_MEDIA:
      return { ...state, loading: true };
    case types.FETCHED_MEDIA:
      return { ...state, loading: false };
    default:
      return state;
  }
}
