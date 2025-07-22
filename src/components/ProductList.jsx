import React from 'react';
import './ProductList.css';
import { Link } from 'react-router-dom';
import products from './productsData';

function ProductList() {
  return (
    <div className="product-grid">
      {products.map(product => (
        <Link key={product.id} to={`/product/${product.id}`} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>₹{product.price}</p>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
