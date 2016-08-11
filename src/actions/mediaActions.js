import * as types from '../constants/actionTypes';

export const flickrImagesAction = (payload) => ({
  type: types.FLICKR_IMAGES_REQUEST,
  payload
});

export const selectImageAction = (image) => ({
  type: types.SELECTED_IMAGE,
  image
});

export const selectVideoAction = (video) => ({
  type: types.SELECTED_VIDEO,
  video
});

export const shutterVideosAction = (payload) => ({
  type: types.SHUTTER_VIDEOS_REQUEST,
  payload
});

export const searchMediaAction = (payload) => ({
  type: types.SEARCH_MEDIA_REQUEST,
  payload
});
