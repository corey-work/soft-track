import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import banner from '../../assets/all-products-banner.png'
import Video from '../../components/Video'
import Features from '../../components/Features'

const ProductsPage = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
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
            Whether you're scaling an IoT system, managing enterprise assets, or deploying connected devices in the field, SoftTrack gives you the foundation to operate with confidence. Our advanced remote management tools make it effortless to monitor and control your infrastructure from anywhere.
            Looking for something tailored? Reach out we might already have the solution you need.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="p-6 sm:p-10">
      <Video videoId="dl7u9TpVPLc">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Watch Our Tracker in Action</h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        See how the Teltonika FMC003 works in real-world conditions with live CAN bus data and GNSS tracking in motion.
      </p>
    </Video>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <>
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="bg-white place-items-center shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <Link to={'/cart'}>
              <button className='place-items-center px-4 py-3 mt-4 bg-blue-400 rounded-lg text-white  hover:bg-blue-600 transform duration-300 cursor-pointer'>Add to cart</button>
              
              </Link>
              <div className="flex place-items-center flex-col justify-end p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>

              </div>
            </Link>
                </>
          ))}
          
        </div>
      </div>
      <Features />
    </div>
    
  )
}

export default ProductsPage
