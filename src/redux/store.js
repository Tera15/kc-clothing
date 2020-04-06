import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

 const middlewares = [thunk];

 // only apply these middlewars in development and not in production
 if (process.env.NODE_ENV === 'development') {
     middlewares.push(logger)
 };

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); // session persistance 

export default { store, persistor };