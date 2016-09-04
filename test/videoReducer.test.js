/**
 * Created by rowland on 8/15/16.
 */

import expect from 'expect';
import videoReducer from '../src/reducers/videoReducer';
import * as types from '../src/constants/actionTypes';

describe('Test for image Reducers', () => {
  const initialState = {
    videos: [{
      id: 1,
      link: 'www.test.com/1.mp4'
    }]
  };

  it('should return the initial state', () => {
    expect(videoReducer(undefined, [])).toEqual([]);
  });

  it('should return the all videos in the stores tree', () => {
    const testAction = { type: types.SHUTTER_VIDEOS_SUCCESS, videos: 'www.test.com/1.mp4' };
    expect(videoReducer(initialState, testAction)).toEqual([ 'www.test.com/1.mp4' ]);
  });

  it('should return the selected video', () => {
    const testAction = { type: types.SELECTED_VIDEO, video: 'www.test.com/1.mp4' };
    const expectValue = { videos: [{ id: 1, link: 'www.test.com/1.mp4' }], selectedVideo: 'www.test.com/1.mp4' };
    expect(videoReducer(initialState, testAction)).toEqual(expectValue);
  });
});
