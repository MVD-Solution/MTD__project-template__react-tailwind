import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import * as intl from '@store/models/intl';
import * as theme from '@store/models/theme';
import * as todos from '@store/models/todo';

const sagaMiddleWare = createSagaMiddleWare();
const reducer = combineReducers({
  intl: intl.intlSlice.reducer,
  theme: theme.themeSlice.reducer,
  todos: todos.todoReducers
});

export const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare]
});

const watcherSagaList = [todos.watcherSaga];
watcherSagaList.forEach((watcherSaga) => sagaMiddleWare.run(watcherSaga));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
