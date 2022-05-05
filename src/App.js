import "./App.css";
import Products from "./components/Products";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <h1 className="shop-header">The Awesome Store</h1>
      <div className="App">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
