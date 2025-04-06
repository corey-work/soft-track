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

        {/* Text */}
        <div>
          <h2 className="text-xl text-black/60 font-semibold mb-4">{product.tagline}</h2>
          <p className='font-bold text-3xl text-gray-900'>{product.price}</p>
          <p className="text-gray-700 mb-4 whitespace-pre-line">{product.description}</p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            {product.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

            <div className='flex flex-col'>
              <label htmlFor="">SIM card:</label>
            <select className='p-2 hover:cursor-pointer border border-gray-300' name="" id="">
              <option value="">Choose an option</option>
              <option value="">SIM card not included: €65.00</option>
              <option value="">SIM card included: €95.00 </option>
            </select>
            </div>
          
          <div className='flex py-3'>
              <button className='bg-gray-200 px-2 hover:bg-gray-500 cursor-pointer transition-all ease-in'>-</button>
              <button className='px-3 py-2 bg-blue-400 hover:bg-blue-700 transition-all ease-in cursor-pointer'>1</button>
              <button className='bg-gray-200 px-2 hover:bg-gray-500 cursor-pointer transition-all ease-in'>+</button>
              <div className='flex items-center justify-center'>
                <button className='ml-6 font-bold px-4 py-3 rounded-lg bg-yellow-300 hover:bg-yellow-500 transition-all ease-in cursor-pointer'>Add to Cart</button>
              </div>
          </div>

          <div className="mt-6">
            <Link to="/products" className="text-blue-500 hover:underline">
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
