import { ProductInfo } from '../App';
import OneProduct from '../Components/OneProduct';
import { useState, useEffect } from 'react';
import '../css/home.css';

function Home() {
  const [filterActive, setFilterActive] = useState(false);
  const [products, setProducts] = useState<ProductInfo[]>([]);
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

  const activateFilter = () => {
    setFilterActive(!filterActive);
  };

  return (
    <div className="home">
      <h1 className="main-header">THE MILK STORE</h1>
      
      <div className="home-container">

        <div className="home-search">
          <form className="search-bar">
            <input type="text" placeholder="Search" />
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>

          <div className="filter-button" onClick={activateFilter}>
            <p className="filter-text">Filter</p>
            <p className={`filter-arrow-${filterActive ? 'up' : 'down'}`}>&#xFE40;</p>
          </div>


        </div>

        <div className={`filter-container ${filterActive ? 'hidden' : ''}`}>
        <div className="filter-items">
          <label><input type="checkbox" />All</label>
          <label><input type="checkbox" />Almond milk</label>
          <label><input type="checkbox" />Cashew milk</label>
          <label><input type="checkbox" />Coconut milk</label>
          <label><input type="checkbox" />Hemp milk</label>
          <label><input type="checkbox" />Macadamia milk</label>
          <label><input type="checkbox" />Oat milk</label>
          <label><input type="checkbox" />Pea milk</label>
          <label><input type="checkbox" />Rice milk</label>
          <label><input type="checkbox" />Soy milk</label>
          <label><input type="checkbox" />Walnut milk</label>
          <label><input type="checkbox" />Whole milk</label>
          </div>
        </div>
      
        <p className="product-count">99 Products</p>
        <div className="products-container">
          {products.map(p => <OneProduct ProductData={p} />)}
        </div>
        <button onClick={loadMore} className="show-more">Show more</button>
      </div>

    </div>
  );
}

export default Home;
