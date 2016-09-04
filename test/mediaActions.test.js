import expect from 'expect';
import {
  selectImageAction,
  searchMediaAction,
  selectVideoAction
} from '../src/actions/mediaActions';
import * as types from '../src/constants/actionTypes';


describe('Test for Action creators', () => {

  it('should return selected images action object', () => {
    const image = { id: 1, link: 'great.com/1.jpg' };
    expect(selectImageAction(image)).toEqual({ type: types.SELECTED_IMAGE, image });
  });

  it('should return selected video action object', () => {
    const video = { id: 1, link: 'great.com/1.mp4' };
    expect(selectVideoAction(video)).toEqual({ type: types.SELECTED_VIDEO, video });
  });

  it('should return searchMediaAction action object', () => {
    const test = { id: 1, link: 'great.com/1.jpg' };
    expect(searchMediaAction(test)).toEqual({ type: types.SEARCH_MEDIA_REQUEST, payload: test });
  });
});
