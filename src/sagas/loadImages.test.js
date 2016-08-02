require('babel-polyfill');
import {expect} from 'chai';
import {delay} from 'redux-saga'
import {put, take, call, fork} from 'redux-saga/effects';

import {watchLoadImages, loadImages} from './loadImagesSaga';
import {fetchImages} from '../Api/flickr';

describe('Test for watch Images', () => {
  const gen = watchLoadImages();
  it('should take on the LOAD_IMAGES_REQUEST action', () => {
    expect(gen.next().value).to.deep.equal(take('LOAD_IMAGES_REQUEST'));
  });
  it('should fork fork the LOAD_IMAGES_SUCCESS ', () => {
    expect(gen.next().value).to.deep.equal(fork(loadImages, undefined));
  });
  it('should should return to the LOAD_IMAGES_REQUEST', () => {
    expect(gen.next().value).to.deep.equal(take('LOAD_IMAGES_REQUEST'));
  });
});

describe('Test for load Images', () => {
  call(delay, 1000);
  const gen = loadImages();
  const error = 'fail';
  const images = ['www.photo.com/you.jpg'];
  it('should fetch images from the the Api', () => {
    expect(gen.next().value).to.deep.equal(call(delay, 1000));
  });
  it('should fetch images from the the Api', () => {
    expect(gen.next().value).to.deep.equal(call(fetchImages));
  });
  it('should dispatch LOAD_IMAGES_SUCCESS action to the reducer', () => {
    expect(gen.next(images).value).to.deep.equal(put({type: 'LOAD_IMAGES_SUCCESS', images}));
  });
  it('should dispatch SELECTED_IMAGE action to the reducer', () => {
    expect(gen.next(images).value).to.deep.equal(put({type: 'SELECTED_IMAGE', image: images[0]}))
  });
  it('should dispatch LOAD_IMAGE_ERROR action to the reducer', () => {
    expect(gen.throw(error).value).to.deep.equal(put({type: 'LOAD_IMAGES_ERROR', error}));
  })
});
