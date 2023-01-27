import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import OneProductPage from './Pages/OneProductPage';

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
          <Route path="/Products/:id" element={<OneProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
