import React from 'react';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import MainPage from './pages/MainPage';
import Page404 from './pages/Page404';
import Header from './components/Header/Header';
import ProductPage from './pages/ProductPage';
function App() {
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      BrowserRouter,
      null,
      React.createElement(Header, null),
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: '/about', element: React.createElement(About, null) }),
        React.createElement(Route, { path: '/', element: React.createElement(MainPage, null) }),
        React.createElement(Route, {
          path: '/page404',
          element: React.createElement(Page404, null),
        }),
        React.createElement(Route, {
          path: '/product/:id',
          element: React.createElement(ProductPage, null),
        }),
        React.createElement(Route, {
          path: '*',
          element: React.createElement(Navigate, { to: '/page404', replace: true }),
        })
      )
    )
  );
}
export default App;
