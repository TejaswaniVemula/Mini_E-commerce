import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import products from './productsData';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>Price: ₹{product.price}</p>
        <p>This is a great product for your daily use.</p>
      </div>
    </div>
  );
}

export default ProductDetails;
