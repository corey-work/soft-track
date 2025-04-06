import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/teltonika/teltonika-main.png';

const Cart = () => {
  
  const cartItems = [
    {
      id: 'fmc003',
      name: 'Teltonika FMC003',
      price: 65.0,
      quantity: 1,
      image: img1,
    },
  ]

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

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
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-contain rounded-md"
                  />
                  <div className="sm:ml-6 flex-1 mt-4 sm:mt-0">
                    <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-sm text-gray-500 mt-1">€{item.price.toFixed(2)}</p>
                    <div className="mt-4 flex items-center gap-4">
                      <label htmlFor="quantity" className="text-sm font-medium">
                        Quantity:
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        value={item.quantity}
                        min="1"
                        className="w-16 p-1 border border-gray-300 rounded text-center"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-auto">
                    <button className="text-red-500 hover:underline cursor-pointer text-sm">Remove</button>
                  </div>
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
              <Link
                to="/products"
                className="block text-center text-blue-500 hover:underline mt-4 text-sm"
              >
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
