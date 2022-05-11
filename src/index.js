import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Standings from './routes/Standings';
import Card from './components/Card';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes >
      <Route path='/' element={<App />} />
      <Route path='/standings' element={<Standings />} >
        <Route path={'3'} element={<Standings />}/>
        <Route index element={<Card />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

