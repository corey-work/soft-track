import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import banner from '../../assets/all-products-banner.png'
import Video from '../../components/Video'
import Features from '../../components/Features'
import { useCart } from '../../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'

const ProductsPage = () => {
  const { addToCart } = useCart()

  const handleAddToCart = (product) => {
    addToCart(product, 1)
    toast.success('Item has successfully been added to the cart')
  }



  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-[400px]">
        <img
          src={banner}
          alt="Products Banner"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
              Explore Our Product Line
            </h1>
            <p className="text-white mt-2 text-lg drop-shadow-md">
              SoftTrack delivers intelligent tracking solutions built for speed, security, and rock-solid reliability.
              Whether you're scaling an IoT system or managing enterprise assets, SoftTrack helps you stay connected.
            </p>
          </div>
        </div>
      </div>

      {/* Video */}
      <div className="p-6 sm:p-10">
        <Video videoId="dl7u9TpVPLc">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Watch Our Tracker in Action</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            See how the Teltonika FMC003 works in real-world conditions with live CAN bus data and GNSS tracking in motion.
          </p>
        </Video>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col justify-between"
            >
              {/* Image and Title Link */}
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </Link>

              <div className="p-4 flex flex-col flex-grow justify-between">
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
                  <p className="text-sm text-gray-600">{product.tagline}</p>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center justify-center transition"
                >
                  <FaShoppingCart size={20} className="mr-2" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <Features />
      <ToastContainer />
    </div>
  )
}

export default ProductsPage
