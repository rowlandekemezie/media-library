import { combineReducers } from 'redux';
import images from './imageReducer';
import videos from './videoReducer';
import loading from './loading';

const rootReducer = combineReducers({
  images, videos, loading
});

export default rootReducer;
