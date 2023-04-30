import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import MainPage from './pages/MainPage';
import Page404 from './pages/Page404';
import Header from './components/Header/Header';
import AddCardForm from './pages/AddCardForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<MainPage isModalOpen={false} />}></Route>
        <Route path="/page404" element={<Page404 />}></Route>
        <Route path="/add-item" element={<AddCardForm />} />
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
