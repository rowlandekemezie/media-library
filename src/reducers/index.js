import {combineReducers} from 'redux';
import images from './imageReducers';
import videos from './videoReducers';

const rootReducer = combineReducers({
  images: images,
  videos: videos
});

export default rootReducer;
