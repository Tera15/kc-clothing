import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import createSagaMiddleware from 'redux-saga'

import rootSaga from './root-saga';

import rootReducer from './root-reducer';

//init sagas
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];

 // only apply these middlewars in development and not in production
 if (process.env.NODE_ENV === 'development') {
     middlewares.push(logger)
 };



export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store); // session persistance 
console.log(typeof(sagaMiddleware))
export default { store, persistor }; 