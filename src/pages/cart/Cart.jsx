import React from 'react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const extractNumericPrice = (priceString) => {
  if (!priceString) return 0
  const match = priceString.match(/\d+(\.\d+)?/)
  return match ? parseFloat(match[0]) : 0
}

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart()

  const total = cartItems.reduce((acc, item) => {
    const numericPrice = extractNumericPrice(item.price)
    return acc + numericPrice * item.quantity
  }, 0)

  return (
    <div className="w-full px-6 py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>Your cart is currently empty.</p>
            <Link to="/products" className="text-blue-600 hover:underline mt-4 inline-block">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow">
                  <img src={item.image} alt={item.name} className="w-28 h-28 object-contain rounded-md" />
                  <div className="sm:ml-6 flex-1 mt-4 sm:mt-0">
                    <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-sm text-gray-500 mt-1">€{item.price}</p>

                    <div className="mt-4 flex items-center gap-2">
                      <label className="text-sm font-medium">Quantity:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-16 p-1 border border-gray-300 rounded text-center"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 cursor-pointer hover:underline text-sm mt-4 sm:mt-0 sm:ml-auto"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-semibold mb-6">Order Summary</h3>
              <div className="flex justify-between mb-4 text-gray-700">
                <span>Subtotal</span>
                <span>€{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-6 text-gray-700">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-4 flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>€{total.toFixed(2)}</span>
              </div>

              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">
                Proceed to Checkout
              </button>
              <Link to="/products" className="block text-center text-blue-500 hover:underline mt-4 text-sm">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
