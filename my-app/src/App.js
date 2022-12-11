import React, { useState, useEffect } from 'react';
import CardPage from './CardPage';
import CardsPage from './CardsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardsPage />}/>
        <Route exact path="/cards/:id" element={<CardPage />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;