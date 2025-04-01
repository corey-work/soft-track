import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../../data/products'

const ProductImageDetail = () => {
  const { productId, imageIndex } = useParams()
  const product = products.find((p) => p.id === productId)
  const imageObj = product?.images?.[imageIndex]

  if (!product || !imageObj) {
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
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          {product.name}
        </h1>
        <p className="text-gray-500 mt-2">{imageObj.description}</p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Main Image */}
        <div className="flex-1">
          <img
            src={imageObj.src}
            alt={`Image ${imageIndex}`}
            className="w-full max-h-[500px] object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex flex-row md:flex-col gap-4 md:mt-0 mt-6 md:w-[160px]">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={imageObj.src}
              alt={`Thumbnail ${i + 1}`}
              className="w-24 h-24 object-cover rounded-md border border-gray-200 shadow-sm"
            />
          ))}
        </div>
      </div>

      {/* Back Link */}
      <div className="mt-10 text-center">
        <Link
          to={`/products/${productId}`}
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  )
}

export default ProductImageDetail
