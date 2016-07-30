import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import {watchLoadImages} from '../sagas/loadImagesSaga';

  const sagaMiddleware = createSagaMiddleware();
  const store =  createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );

sagaMiddleware.run(watchLoadImages);

export default store;
