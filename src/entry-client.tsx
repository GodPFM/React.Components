import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import { RootState, store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const newStore = store(
  (window as typeof window & { __PRELOADED_STATE__: RootState }).__PRELOADED_STATE__
);

Reflect.deleteProperty(window, '__PRELOADED_STATE__');

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={newStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
