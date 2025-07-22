import React from 'react';
import './ProductList.css';
import { Link } from 'react-router-dom';
import products from './productsData';

function ProductList() {
  return (
    <div className="product-grid">
      {products.map(product => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className="product-link"
        >
          <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>₹{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
