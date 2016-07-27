import * as types from './actionTypes';
import mockApi from '../api/mockApi';

export default function loadImageSuccess(images) {
    return {
        type: types.LOAD_IMAGE_SUCCESS,
        images
    }
}

export function loadImages() {
    return function (dispatch) {
        return mockApi.loadAllImages()
            .then(image => {
                dispatch(loadImageSuccess(image));
            }).catch(error => {
                throw(error);
            })
    };
}