import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function (state = initialState.images, action) {
    // console.log(state, 'This is the state from the reducer function');
    switch (action.type){
        case types.LOAD_IMAGE_SUCCESS:
            return state;
        default:
            return state;
    }
    //return state;
}