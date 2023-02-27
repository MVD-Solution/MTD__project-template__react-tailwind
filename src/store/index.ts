import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import * as intl from './model/intl';

const sagaMiddleWare = createSagaMiddleWare();
const reducer = combineReducers({
  intl: intl.intlSlice.reducer
});

export const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
