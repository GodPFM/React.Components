import type { PreloadedState } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import cardsReducer from './cardsSlice';
import formCardsReducer from './formSlice';

const rootReducer = combineReducers({
  searchReducer,
  cardsReducer,
  formCardsReducer,
});

export const store = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
