import { afterAll, afterEach, beforeAll } from 'vitest';
import { Item } from '../types/APIResponse';
import { server } from '../mocks/server';
import { store as appStore } from '../store/index';
import type { RenderOptions } from '@testing-library/react';
import type { AppStore, RootState } from '../store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React, { PropsWithChildren } from 'react';
import { PreloadedState } from '@reduxjs/toolkit';
import { cardsAPI } from '../API/ProductsServes';
import nodeFetch, { Request, Response } from 'node-fetch';

// Fix error with node. Issue - https://github.com/reduxjs/redux-toolkit/issues/3254

// @ts-ignore
global.fetch = nodeFetch;
// @ts-ignore
global.Request = Request;
// @ts-ignore
global.Response = Response;

const store = appStore();

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  store.dispatch(cardsAPI.util.resetApiState());
});
afterAll(() => server.close());

export const itemData: Item[] = [
  {
    id: 15,
    title: 'Modern Plastic Sausages',
    price: 719,
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    images: [
      'https://picsum.photos/640/640?r=1682',
      'https://picsum.photos/640/640?r=6407',
      'https://picsum.photos/640/640?r=3409',
    ],
    creationAt: '2023-04-14T08:53:29.000Z',
    updatedAt: '2023-04-14T08:53:29.000Z',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://picsum.photos/640/640?r=8803',
      creationAt: '2023-04-14T08:53:29.000Z',
      updatedAt: '2023-04-14T08:53:29.000Z',
    },
  },
];

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = appStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
