
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="app-title">Mini E-Commerce</h1>
                <p className="app-subtitle">Explore our amazing products.</p>
                <ProductList />
              </>
            }
          />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<h2>🛒 Your cart is empty</h2>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
