import { ProductInfo } from "../App";
import milk from '../img/milk.png';
import '../css/one-product.css';

function OneProduct({ProductData}: {ProductData: ProductInfo}) {
  return (
    <div className="one-product">
      <div className="product-image">
        <img src={milk} />
      </div>
      <div className="product-details">
        <p>{ProductData.name}</p>
        <p className="product-details-type">{ProductData.type}</p>
      </div>
      
    </div>
  );
}

export default OneProduct;