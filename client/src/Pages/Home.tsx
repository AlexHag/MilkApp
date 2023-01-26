import { useState, useEffect } from 'react';

import '../css/home.css';
import { ProductInfo } from '../App';
import SearchFilter from '../Components/SearchFilter';
import OneProduct from '../Components/OneProduct';

export interface ISearchFilterProps {
  setFilterType: React.Dispatch<React.SetStateAction<string>>,
  setFilterSearch: React.Dispatch<React.SetStateAction<string>>,
  handleSearch: () => void,
};

function Home() {
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [filterType, setFilterType] = useState<string>('');
  const [filterSearch, setFilterSearch] = useState<string>('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('http://localhost:5012/api/Products')
    .then(p => p.json())
    .then(p => setProducts(p));
  }, []);

  const loadMore = () => {
    fetch(`http://localhost:5012/api/Products?page=${page}`)
    .then(p => p.json())
    .then(p => {setProducts([...products,...p]); setPage(page+1)});
  }

  const handleSearch = () => {
    console.log("bro?")
    fetch(`http://localhost:5012/api/Products?filter=${filterType}`)
    .then(p => p.json())
    .then(p => setProducts(p));
  }

  const SearchFilterProps: ISearchFilterProps = {
    setFilterType: setFilterType,
    setFilterSearch: setFilterSearch,
    handleSearch: handleSearch,
  }

  const dostuff = () => {
    console.log(filterType, filterSearch);
  }
  return (
      <div className="home">
        <h1 className="main-header">THE MILK STORE</h1>
        
        <div className="home-container">
          <button onClick={dostuff}>Do stuff</button>
          <SearchFilter SearchFilterProps={SearchFilterProps} />
          <p className="product-count">99 Products</p>
          <div className="products-container">
            {products.map(p => <OneProduct key={p.id} ProductData={p} />)}
          </div>
          <button onClick={loadMore} className="show-more">Show more</button>
        </div>

      </div>
  );
}

export default Home;
