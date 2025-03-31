import Navbar from "./components/Navbar"
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDetails from "./pages/products/ProductDetails";
import SupportPage from "./pages/SupportPage";
import NewsPage from "./pages/NewsPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import usePageTitle from "./hooks/usePageTitle";
import Services from "./pages/services/Service";
import Software from "./pages/services/Software";
import Hardware from "./pages/services/Hardware";

function App() {
  usePageTitle()
  return (
    <>
    
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/software" element={<Software />} />
          <Route path="/services/hardware" element={<Hardware />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
