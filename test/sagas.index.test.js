import expect from 'expect';
import { fork } from 'redux-saga/effects';
import startForeman from '../src/sagas';
import watchSearchMedia from '../src/sagas/watchers';

describe('Test startForeman saga', () => {
  it('should yield array watchers saga', () => {
    expect(startForeman().next().value).toEqual(fork(watchSearchMedia));
  });
});
