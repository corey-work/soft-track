import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../../data/products'
import { FaShoppingCart } from "react-icons/fa"
import { useCart } from '../../context/CartContext'

const ProductDetails = () => {
  const { productId } = useParams()
  const product = products.find((p) => p.id === productId)
  const [count, setCount] = useState(1)
  const { addToCart } = useCart()

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

  const handleAdd = () => setCount((c) => c + 1)
  const handleSubtract = () => setCount((c) => (c > 1 ? c - 1 : 1))
  const handleAddToCart = () => {
    addToCart(product, count)
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
            {product.name}
          </h1>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 sm:p-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-contain rounded-lg shadow-lg"
        />

        {/* Details */}
        <div>
          <h2 className="text-xl text-black/60 font-semibold mb-4">{product.tagline}</h2>
          <p className="font-bold text-3xl text-gray-900">{product.price}</p>
          <p className="text-gray-700 mb-4 whitespace-pre-line">{product.description}</p>

          <ul className="list-disc list-inside text-gray-600 mb-6">
            {product.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          {/* SIM Option */}
          <div className="flex flex-col mb-4">
            <label htmlFor="sim" className="mb-1 font-medium">SIM card:</label>
            <select className="p-2 border border-gray-300 rounded" id="sim">
              <option>Choose an option</option>
              <option>SIM card not included: €65.00</option>
              <option>SIM card included: €95.00</option>
            </select>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex py-3 items-center">
            <button
              onClick={handleSubtract}
              className="bg-gray-200 px-3 py-2 hover:bg-gray-400 transition"
            >
              -
            </button>
            <span className="px-4 py-2 bg-blue-500 text-white">{count}</span>
            <button
              onClick={handleAdd}
              className="bg-gray-200 px-3 py-2 hover:bg-gray-400 transition"
            >
              +
            </button>
            <Link to={'/cart'}>
            <button
              onClick={handleAddToCart}
              className="ml-4 flex items-center text-white cursor-pointer font-bold px-4 py-3 rounded-lg bg-yellow-300 hover:bg-yellow-500 transition"
            >
              Add to Cart <FaShoppingCart size={20} className="ml-3" />
            </button>
            
            </Link>
          </div>

          <div className="mt-6">
            <Link to="/products" className="text-blue-500 hover:underline">
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      {product.useCases && product.useCases.length > 0 && (
        <div className="mt-20 px-6">
          <h2 className="text-3xl font-bold text-blue-500 text-center mb-8 uppercase">Product Use Cases</h2>
          <div className="max-w-[1300px] mx-auto grid lg:grid-cols-3 gap-6">
            {product.useCases.map((useCase, index) => (
              <div key={index} className="shadow-md bg-white rounded-lg overflow-hidden">
                <img
                  className="w-full h-52 object-cover"
                  src={useCase.image}
                  alt={useCase.name}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-blue-600 mb-2 text-center">{useCase.name}</h3>
                  <p className="text-sm text-gray-600 text-center">{useCase.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
