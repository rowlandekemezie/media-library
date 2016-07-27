import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
// import saga from 'redux-saga';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}