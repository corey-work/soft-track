import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../../data/products'

const ProductImageDetail = () => {
  const { productId } = useParams()
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Image not found</h2>
        <Link to={`/products/${productId}`} className="text-blue-500 underline">
          Back to Product
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <img
          src={product.image}
          alt={`${product.name} image`}
          className="w-full max-h-[500px] object-contain rounded-xl shadow-lg"
        />

        {/* Product Info */}
        <div className="text-gray-700 space-y-4 text-base">
          <h1 className="text-2xl font-bold text-blue-600">
            {product.name} – CAN BUS Reading
          </h1>

          <p className="text-xl font-semibold text-gray-800">{product.price}</p>
          <p className="whitespace-pre-line">{product.description}</p>

          <ul className="list-disc list-inside mt-4">
            {product.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          <p className="text-blue-600 mt-6 font-medium">Contact us to offer you a special offer!!</p>

          <Link
            to={`/products/${productId}`}
            className="inline-block mt-6 text-sm text-blue-500 hover:underline"
          >
            ← Back to Product
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductImageDetail
