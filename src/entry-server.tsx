import React from 'react';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import App from './App';
import { store } from './store';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { fetchAllCards } from './API/ProductsServes';

export async function render(url: string, opts: RenderToPipeableStreamOptions) {
  const newStore = store();

  await newStore.dispatch(
    fetchAllCards({
      limit: 8,
      offset: 0,
      filter: '',
    })
  );

  const pipe = renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={newStore}>
        <App />
      </Provider>
    </StaticRouter>,
    opts
  );

  return { pipe, newStore };
}
