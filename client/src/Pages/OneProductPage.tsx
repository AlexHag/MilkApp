import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductInfo } from "../App";
import milk from '../img/milk.png';
import '../css/one-product-page.css';

function OneProductPage() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [theProduct, setTheProduct] = useState<ProductInfo>();
  
  useEffect(() => {
    fetch(`http://localhost:5012/api/Product/${id}`)
    .then(p => p.json())
    .then(p => setTheProduct(p));
  }, []);

  return (
    <div className="product-page">
      <h1 className="main-header">THE MILK STORE</h1>
      
      <div className="product-page-content">
        <button className="back-button" onClick={() => navigate("/")}>&#12296; Back</button>
        {theProduct ? (
          <>
            <div className="the-product-column">
              <img src={milk} alt="milk"/>
              <div className="product-info">
                <p className="product-name">{theProduct.name}</p>
                <p className="product-type">{theProduct.type}</p>
                <p className="product-amount">44 Liters</p>
                <div className="slidecontainer">
                  <input type="range" min="1" max="100" className="slider" id="myRange"/>
                </div>
                <p>In stock: {theProduct.storage}</p>
                <div>
                <button className="order-button">Order</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}      
      </div>      
    </div>
  );
}

export default OneProductPage;