import { configureStore } from '@reduxjs/toolkit';
import * as intl from './model/intl';

export const store = configureStore({
  reducer: {
    intl: intl.intlSlice.reducer,
  },
  devTools: true,
});
