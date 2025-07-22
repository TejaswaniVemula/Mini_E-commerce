import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <h1 className="app-title"> Mini E-Commerce</h1>
        <p className="app-subtitle">Explore our amazing products below.</p>
        <ProductList />
      </div>
    </>
  );
}

export default App;
