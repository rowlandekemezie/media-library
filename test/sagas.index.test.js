import expect from 'expect';
import { fork } from 'redux-saga/effects';
import startForeman, { watchers } from '../src/sagas';

describe('Test watchers saga', () => {
  it('should yield array of effects', () => {
    expect(watchers().next().value.length).toEqual(3);
  });
});

describe('Test startForeman saga', () => {
  it('should yield array watchers saga', () => {
    expect(startForeman().next().value).toEqual(fork(watchers));
  });
});
