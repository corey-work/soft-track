import Navbar from "./components/Navbar"
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDetails from "./pages/products/ProductDetails";



function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/about" element />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
