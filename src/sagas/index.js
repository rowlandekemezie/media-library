import { fork } from 'redux-saga/effects'; // The "fork" effect allows for non-blocking calls
import { watchLoadFlickrImages, watchLoadShutterVideos, watchSearchMedia } from './watchers';

export function* watchers() {
  yield [
    fork(watchLoadFlickrImages),
    fork(watchLoadShutterVideos),
    fork(watchSearchMedia)
  ];
}

export default function* startForeman() {
  yield fork(watchers);
}
