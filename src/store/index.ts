import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import { cardsAPI } from '../API/ProductsServes';
import cardsReducer from './cardsSlice';
import formCardsReducer from './formSlice';
import type { PreloadedState } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  searchReducer,
  cardsReducer,
  formCardsReducer,
  [cardsAPI.reducerPath]: cardsAPI.reducer,
});

export const store = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(cardsAPI.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
