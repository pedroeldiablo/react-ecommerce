import {  createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}

export const store = createStore(rootReducer,  composeWithDevTools(
    applyMiddleware(...middleWares),
    // other store enhancers if any
  ));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
