import {createStore,applyMiddleware} from 'redux';
//saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

import logger from 'redux-logger';
import rootReducer from './root-reducer';
const sagaMiddleware = createSagaMiddleware();
const   middlewares = [logger,sagaMiddleware];
export const store = createStore(rootReducer,applyMiddleware(...middlewares));
//saga run 
sagaMiddleware.run(rootSaga);