import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import * as intl from './model/intl';
import * as question from './model/question';
console.log(question);

const sagaMiddleWare = createSagaMiddleWare();
const reducer = combineReducers({
  intl: intl.intlSlice.reducer,
});
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare];
export const store = configureStore({
  reducer,
  devTools: true,
  middleware,
});
