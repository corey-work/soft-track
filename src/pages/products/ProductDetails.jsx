import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../../data/products'

const ProductDetails = () => {
  const { productId } = useParams()
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/products" className="text-blue-500 underline">
          Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-[400px]">
        <img
          src={product.banner}
          alt={`${product.name} Banner`}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
              {product.name}
            </h1>
            
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6 sm:p-10 max-w-5xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={product.image2}
              alt={product.name}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
           
            <p className="text-gray-600 text-lg mb-6">{product.description}</p>

            <button className="w-max bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
              Learn More
            </button>

            <Link to="/products" className="mt-6 text-blue-500 hover:text-blue-700 hover:underline transition-all ease-out">
              ← Back to Products
            </Link>
          </div>
        </div>

        {/* Image Gallery */}
        {product.images && product.images.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} image ${idx + 1}`}
                  className="w-full h-56 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetails
