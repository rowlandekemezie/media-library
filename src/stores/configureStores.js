import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

 export const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer, initialState,
      applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  }
};
