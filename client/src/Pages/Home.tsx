import { useState, useEffect } from 'react';

import '../css/home.css';
import { ProductResponse } from '../App';
import SearchFilter from '../Components/SearchFilter';
import OneProduct from '../Components/OneProduct';

export interface ISearchFilterProps {
  setFilterType: React.Dispatch<React.SetStateAction<string>>,
  setFilterSearch: React.Dispatch<React.SetStateAction<string>>,
  handleSearch: () => void,
};

function Home() {
  const [productResponse, setProductResponse] = useState<ProductResponse>({products:[],total:0,recieved:0,page:1,maxPage:0});
  const [filterType, setFilterType] = useState<string>('');
  const [filterSearch, setFilterSearch] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:5012/api/Products')
    .then(p => p.json())
    .then(p => setProductResponse(p));
  }, []);

  const loadMore = () => {
    if(productResponse.page+1 <= productResponse.maxPage) {
      fetch(`http://localhost:5012/api/Products?page=${productResponse.page+1}&filter=${filterType}`)
      .then(p => p.json())
      .then(p => setProductResponse(prevState => ({
        products: [...prevState.products, ...p['products']], 
        recieved:p['recieved'], 
        total: p['total'], 
        page:p['page'], 
        maxPage: p['maxPage']
      })))
    }
  }

  const handleSearch = () => {
    console.log(`http://localhost:5012/api/Products?filter=${filterType}&search=${filterSearch}`);
    fetch(`http://localhost:5012/api/Products?filter=${filterType}&search=${filterSearch}`)
    .then(p => p.json())
    .then(p => setProductResponse(p));
  }

  useEffect(() => {
    handleSearch();
  }, [filterType]);

  const SearchFilterProps: ISearchFilterProps = {
    setFilterType: setFilterType,
    setFilterSearch: setFilterSearch,
    handleSearch: handleSearch,
  }

  const ShowMoreButton = () => {
    if(productResponse.page < productResponse.maxPage) {
      return <button onClick={loadMore} className="show-more">Show more</button>
    }
  }

  return (
      <div className="home">
        <h1 className="main-header">THE MILK STORE</h1>
        <div className="home-container">
          <SearchFilter SearchFilterProps={SearchFilterProps} />
          <p className="product-count">Showing {productResponse.products.length} out of {productResponse.total} products</p>
          <div className="products-container">
            {productResponse.products.map(p => <OneProduct key={p.id} ProductData={p} />)}
          </div>
          {ShowMoreButton()}
        </div>
      </div>
  );
}

export default Home;
