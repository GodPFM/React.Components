import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';

const rootReducer = combineReducers({
  searchReducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
