import imageReducers from './imageReducers';
import {combineReducers} from 'redux';

const rootReducer =  combineReducers({
    images: imageReducers
});

export default rootReducer;