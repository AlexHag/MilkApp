import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

export interface ProductResponse {
  products: ProductInfo[],
  total: number,
  recieved: number,
  page: number,
  maxPage: number
}

export interface ProductInfo {
  id: string;
  name: string;
  type: string;
  storage: number;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
