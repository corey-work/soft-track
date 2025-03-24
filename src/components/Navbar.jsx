import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { navLinks } from '../constants';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setIsMenuOpen(isMenuOpen => !isMenuOpen)
    }
  return (
    <div className='w-full p-2'>
      <div className='max-w-[1400px] w-full mx-auto flex items-center justify-around'>
        <div> 
            <Link to='/'>
                <h1 className='text-bold text-3xl'>Soft<span className='text-blue-700'>Track</span></h1>
            </Link>
        </div>
        <div className='relative group hidden sm:block items-center text-black'>
          <input className='bg-white w-[200px] group-hover:w-[300px] rounded-full border border-blue-500 
          px-2 py-1 focus:outline-none focus:border-1 focus:border-blue-500 
          transition-all duration-300' type="text" />
          <IoIosSearch size={20} className='absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-blue-500' />
        </div>
        <div className='flex flex-row items-center gap-8 justify-center'>
            {navLinks.map((link, i) => (
                <ul key={i} className='hidden md:flex'>
                    <Link to={link.to}>
                        <li className='text-lg font-medium hover:text-blue-600 cursor-pointer transition-all'>{link.name}</li>
                    </Link>
                </ul>
            ))}
            <button className='pt-3 block md:hidden' onClick={handleToggleMenu}>{isMenuOpen 
            ? <AiOutlineClose className='hover:text-blue-500 cursor-pointer' size={20} /> 
            : <AiOutlineMenu className='hover:text-blue-500 cursor-pointer' size={20} />}
            </button>
        </div>


        <div className={isMenuOpen ? 'fixed left-0 top-0 p-4 h-full w-[60%] bg-white border-r border-gray-500 ease-in-out duration-500' 
          : 'fixed left-[-100%] top-0 h-full w-[60%] bg-white border-r border-gray-500 ease-in-out duration-500' }>
          <h1 className='text-bold text-3xl'>Soft<span className='text-blue-700'>Track</span></h1>
            {navLinks.map((link, i) => (
          <ul key={i} className='pt-4 text-black uppercase'>
                <li className='p-4 border-b border-gray-500 hover:text-blue-500  cursor-pointer'>{link.name}</li>
          </ul>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
