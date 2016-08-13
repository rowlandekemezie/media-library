import expect from 'expect';
import imageReducer from '../src/reducers/imageReducer';
import * as types from '../src/constants/actionTypes';


describe('Test for image Reducers', () => {
  const initialState = {
    images: [{
      id: 1,
      'watchHref': 'www.test.com/1.jpg'
    }]
  };

  it('should return the initial state', () => {
    expect(imageReducer(undefined, [])).toEqual([]);
  });

  it('should return the all images in the stores tree', () => {
    const testAction = {type: types.SEARCH_MEDIA_SUCCESS, images: 'www.test.com/1.jpg'};
    expect(imageReducer(initialState, testAction)).toEqual(['www.test.com/1.jpg'])
  });

  it('should return the selected image', () => {
    const testAction = {type: types.SELECTED_IMAGE, image: 'www.test.com/1.jpg'};
    const expectValue = {images: [ { id: 1, watchHref: 'www.test.com/1.jpg' } ], selectedImage: 'www.test.com/1.jpg'};
    expect(imageReducer(initialState, testAction)).toEqual(expectValue);
  })
});
