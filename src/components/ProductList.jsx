import React from 'react';
import './ProductList.css';
import product1 from '../assets/Productimages/wireless_headphones.jpeg';
import product2 from '../assets/Productimages/Smart_Watch.jpeg';
import product3 from '../assets/Productimages/Bluetooth_Speaker.jpeg';
import product4 from '../assets/Productimages/Gaming_Mouse.jpeg';
import product5 from '../assets/Productimages/Keyboard.jpeg';
import product6 from '../assets/Productimages/USB Cable.jpeg';
import product7 from '../assets/Productimages/Backpack.jpeg';
import product8 from '../assets/Productimages/Laptop_Stand.jpeg';
import product9 from '../assets/Productimages/Webcam.jpeg';
import product10 from '../assets/Productimages/Microphone.jpeg';
import product11 from '../assets/Productimages/Portable_Charger.jpeg';
import product12 from '../assets/Productimages/Earbuds.jpeg';
import product13 from '../assets/Productimages/LED_Light_Strip.jpeg';
import product14 from '../assets/Productimages/Monitor.jpeg';
import product15 from '../assets/Productimages/Tablet.jpeg';


const products = [
  { id: 1, title: 'Wireless Headphones', price: 2999, image: product1 },
  { id: 2, title: 'Smart Watch', price: 4999, image: product2 },
  { id: 3, title: 'Bluetooth Speaker', price: 1999, image: product3 },
  { id: 4, title: 'Gaming Mouse', price: 899, image: product4 },
  { id: 5, title: 'Keyboard', price: 1299, image: product5 },
  { id: 6, title: 'USB Cable', price: 199, image: product6 },
  { id: 7, title: 'Backpack', price: 1499, image: product7 },
  { id: 8, title: 'Laptop Stand', price: 999, image: product8 },
  { id: 9, title: 'Webcam', price: 2499, image: product9 },
  { id: 10, title: 'Microphone', price: 1899, image: product10 },
  { id: 11, title: 'Portable Charger', price: 2199, image: product11 },
  { id: 12, title: 'Earbuds', price: 1599, image: product12 },
  { id: 13, title: 'LED Light Strip', price: 499, image: product13 },
  { id: 14, title: 'Monitor', price: 10999, image: product14 },
  { id: 15, title: 'Tablet', price: 9999, image: product15 },
];


function ProductList() {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
