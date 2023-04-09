import React from 'react';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import MainPage from './pages/MainPage';
import Page404 from './pages/Page404';
import Header from './components/Header/Header';
import ProductPage from './pages/ProductPage';
import AddCardForm from './pages/AddCardForm';
import Parse from 'parse/dist/parse.min.js';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'bTBI54NNgMYOcu9Wek7gtUaNxzcRZTdOMsCKnSDa';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'JuP0m3MeXtiTZALU5meiuTob4wbVOBOCe2F6raSa';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<MainPage isModalOpen={false} />}></Route>
          <Route path="/page404" element={<Page404 />}></Route>
          <Route path="/product/:id" element={<MainPage isModalOpen={true} />} />
          <Route path="/add-item" element={<AddCardForm />} />
          <Route path="*" element={<Navigate to="/page404" replace />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
