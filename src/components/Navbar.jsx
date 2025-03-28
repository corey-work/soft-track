import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { navLinks } from '../constants';
import { useState } from 'react';
import Search from './Search';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setIsMenuOpen(isMenuOpen => !isMenuOpen)
    }
  return (
    <div className='w-full py-5 bg-black'>
      <div className='max-w-[1400px] w-full mx-auto flex items-center justify-around'>
        <div> 
            <Link to='/'>
                <h1 className='text-white text-bold lg:text-3xl text-xl'>Soft<span className='text-blue-400'>Track</span></h1>
            </Link>
        </div>
        <div>
          <Search />
        </div>
        <div className='flex flex-row items-center gap-8 justify-center'>
            {navLinks.map((link, i) => (
                <ul key={i} className='hidden md:flex text-white'>
                    <Link to={link.to}>
                        <li className='lg:text-md text-sm font-medium hover:text-blue-400 cursor-pointer transition-all'>{link.name}</li>
                    </Link>
                </ul>
            ))}
            <button className='pt-3 block md:hidden' onClick={handleToggleMenu}>{isMenuOpen 
            ? <AiOutlineClose className='text-white hover:text-blue-400 cursor-pointer' size={20} /> 
            : <AiOutlineMenu className=' text-white hover:text-blue-400 cursor-pointer' size={20} />}
            </button>
        </div>


        <div className={isMenuOpen ? 'fixed z-40 left-0 top-0 p-4 h-full w-[60%] bg-black border-r border-gray-500 ease-in-out duration-500' 
          : 'fixed z-40 left-[-100%] top-0 h-full w-[60%] bg-white border-r border-gray-500 ease-in-out duration-500' }>
          <h1 className='text-bold text-3xl text-white'>Soft<span className='text-blue-400'>Track</span></h1>
            {navLinks.map((link, i) => (
          <ul key={i} className='pt-4 text-white uppercase'>
                <li className='p-4 border-b border-gray-500 hover:text-blue-400  cursor-pointer'>{link.name}</li>
          </ul>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
