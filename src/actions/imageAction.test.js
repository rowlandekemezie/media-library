import expect from 'expect';
import {selectedImage, loadImages} from './imageActions';
import * as types from '../constants/actionTypes';


describe('Test for Action creators', () => {
  it('should return loadImages actions object', () => {
    expect(loadImages()).toEqual({type: types.LOAD_IMAGES_REQUEST});
  });
  
  it('should return selected images action object', () => {
    const image = {id: 1, 'watchHref':  'great.com/1.jpg'};
    expect(selectedImage(image)).toEqual({type: types.SELECTED_IMAGE, image})
  })
});
