import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails'; // We'll create this next

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <h1 className="app-title">Mini E-Commerce</h1>
        <p className="app-subtitle">Explore our amazing products below.</p>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
