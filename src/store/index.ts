import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import { cardsAPI } from '../API/ProductsServes';
import cardsReducer from './cardsSlice';

const rootReducer = combineReducers({
  searchReducer,
  cardsReducer,
  [cardsAPI.reducerPath]: cardsAPI.reducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(cardsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
