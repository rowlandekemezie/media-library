import 'babel-polyfill';
import {expect} from 'chai';
// import {takeEvery, delay} from 'redux-saga'
import {put,take, call, fork} from 'redux-saga/effects';

import {watchLoadImages, loadImages} from './loadImagesSaga';

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
  const gen = loadImages();
  it('should load images', () => {
    expect(gen.next().value).to.deep.equal(call());
  })
})
