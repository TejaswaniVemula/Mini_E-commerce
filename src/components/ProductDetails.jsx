// src/components/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import products from './productsData';
import './ProductDetails.css'; // Optional: only if you create this CSS file

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Price: ₹{product.price}</p>
      <p>This is a great product! Add more details here.</p>
    </div>
  );
}

export default ProductDetails;
