import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Scrn2 from './components/Scrn2';
import Scrn1 from './components/Scrn1';
import Scrn3 from './components/Scrn3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/scrn1' element={<Scrn1 />} />
        <Route path='/scrn2' element={<Scrn2 />} />
        <Route path='/scrn3' element={<Scrn3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
