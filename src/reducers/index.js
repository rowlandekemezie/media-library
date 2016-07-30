import images from './imageReducers';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  images: images
});

export default rootReducer;
