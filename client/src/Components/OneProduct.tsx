import { ProductInfo } from "../App";
import milk from '../img/milk.png';
import '../css/one-product.css';
import { useParams, useNavigate } from "react-router-dom";

function OneProduct({ProductData}: {ProductData: ProductInfo}) {
  let navigate = useNavigate();
  return (
    <div className="one-product" onClick={() => navigate(`/Products/${ProductData.id}`)}>
      <div className="product-image">
        <img src={milk} alt="milk"/>
      </div>
      <div className="product-details">
        <p>{ProductData.name}</p>
        <p className="product-details-type">{ProductData.type}</p>
      </div>
    </div>
  );
}

export default OneProduct;