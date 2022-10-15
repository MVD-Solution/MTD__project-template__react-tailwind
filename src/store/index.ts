import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './model/counter';

export const store = configureStore({
  reducer: {
    ss: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
