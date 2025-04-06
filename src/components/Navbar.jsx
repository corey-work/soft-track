import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { products } from '../data/products'
import Search from './Search'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <div className="w-full py-5 bg-black z-50 relative">
      <div className="max-w-[1400px] w-full mx-auto flex items-center justify-around">
        {/* Logo */}
        <div>
          <Link to="/">
            <h1 className="text-white font-bold lg:text-3xl text-xl">
              Soft<span className="text-blue-400">Track</span>
            </h1>
          </Link>
        </div>

        {/* Search */}
        <div>
          <Search />
        </div>

        {/* Desktop Nav */}
        <div className="flex flex-row items-center gap-8 justify-center">
          {navLinks.map((link, i) => (
            <ul key={i} className="hidden md:flex text-white relative group">
              {/* Products Dropdown */}
              {link.name === 'Products' ? (
                <>
                  <div className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-blue-400 transition-all">
                    <Link to={link.to}>
                      <span>{link.name}</span>
                    </Link>
                    <svg
                      className="w-4 h-4 mt-[2px] transform transition-transform duration-300 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  <div className="absolute top-7 left-0 w-56 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    {products.map((product, index) => (
                      <Link to={`/products/${product.id}`} key={index}>
                        <div className="px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 hover:rounded-xl hover:text-blue-600 transition-all">
                          {product.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : link.name === 'Services' ? (
                <>
                  <div className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-blue-400 transition-all">
                    <Link to={link.to}>
                      <span>{link.name}</span>
                    </Link>
                    <svg
                      className="w-4 h-4 mt-[2px] transform transition-transform duration-300 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  <div className="absolute top-7 left-0 w-56 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    <Link to="/services/software">
                      <div className="px-4 py-2 text-sm text-gray-800 hover:rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all">
                        Software
                      </div>
                    </Link>
                    <Link to="/services/hardware">
                      <div className="px-4 py-2 text-sm text-gray-800 hover:rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all">
                        Hardware
                      </div>
                    </Link>
                  </div>
                </>
              ) : (
                <Link to={link.to}>
                  <li className="lg:text-md text-sm font-medium hover:text-blue-400 cursor-pointer transition-all">
                    {link.name}
                  </li>
                </Link>
              )}
            </ul>
          ))}

          {/* Mobile Menu Button */}
          <button className="pt-3 block md:hidden" onClick={handleToggleMenu}>
            {isMenuOpen ? (
              <AiOutlineClose className="text-white hover:text-blue-400 cursor-pointer" size={20} />
            ) : (
              <AiOutlineMenu className="text-white hover:text-blue-400 cursor-pointer" size={20} />
            )}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={
            isMenuOpen
              ? 'fixed z-40 left-0 top-0 p-4 h-full w-[60%] bg-black border-r border-gray-500 ease-in-out duration-500'
              : 'fixed z-40 left-[-100%] top-0 h-full w-[60%] bg-black border-r border-gray-500 ease-in-out duration-500'
          }
        >
          <h1 className="text-bold text-3xl text-white">
            Soft<span className="text-blue-400">Track</span>
          </h1>

          {navLinks.map((link, i) => (
            <ul key={i} className="pt-4 text-white uppercase">
              <Link to={link.to}>
                <li className="p-4 border-b border-gray-500 hover:text-blue-400 cursor-pointer">
                  {link.name}
                </li>
              </Link>
            </ul>
          ))}
        </div>
        <div>
          <Link to={'/cart'}>
          <FaShoppingCart size={20} className='text-white cursor-pointer' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
