import {fork} from 'redux-saga/effects'; // The "fork" effect allows you make non-blocking calls which I can be joined later
import {watchLoadFlickrImages, watchSearchMedia} from './watchers';

export function* watchers() {
  yield[
    fork(watchLoadFlickrImages),
    fork(watchSearchMedia)
  ]
}

export default function* startForeman() {
  yield fork(watchers);
}
