import React from 'react';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import MainPage from './pages/MainPage';
import Page404 from './pages/Page404';
import Header from './components/Header/Header';
import AddCardForm from './pages/AddCardForm';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store()}>
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
    </Provider>
  );
}

export default App;
