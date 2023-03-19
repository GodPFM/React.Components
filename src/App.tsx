import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import MainPage from './pages/MainPage';
import Page404 from './pages/Page404';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/page404" element={<Page404 />}></Route>
          <Route path="*" element={<Navigate to="/page404" replace />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
