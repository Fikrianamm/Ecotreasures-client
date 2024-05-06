import { configureStore } from '@reduxjs/toolkit';
import isPreloadSlice from './isPreload/isPreload.slice';

export const store = configureStore({
  reducer: {
    isPreload: isPreloadSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
