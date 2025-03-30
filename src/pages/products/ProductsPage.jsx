import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import banner from '../../assets/all-products-banner.png'

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
            SoftTrack offers a comprehensive range of networking solutions designed to ensure your connectivity is reliable, secure, and quick to deploy. Whether you're building an IoT, M2M, or enterprise-grade infrastructure, our products provide the foundation you need — with advanced remote management tools that make control and oversight effortless.

Looking for something specific or unique? Get in touch — we may already have the perfect solution ready for you.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="p-6 sm:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
