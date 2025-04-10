import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full p-3 bg-black'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-4'>
        <div>
            <h1 className='text-white text-bold lg:text-3xl text-xl'>Soft<span className='text-blue-400'>Track</span></h1>
            <div className='h-full py-4'>
                <ul className='text-white flex gap-6 items-start'>
                    <li className='hover:text-blue-400 transition-all ease-in cursor-pointer'><FaTwitter size={25}/></li>
                    <li className='hover:text-blue-400 transition-all ease-in cursor-pointer'><FaFacebook size={25}/></li>
                    <li className='hover:text-blue-400 transition-all ease-in cursor-pointer'><FaLinkedin size={25}/></li>
                    <li className='hover:text-blue-400 transition-all ease-in cursor-pointer'><FaInstagramSquare size={25}/></li>
                </ul>
            </div>
        </div>
        <div>
            <ul className='text-white'>
                <h2 className='mb-2 font-bold text-gray-700'>Quick Links</h2>
                <Link to={'/'}>
                    <li className='py-1 text-xs font-medium text-gray-500 hover:text-blue-400 cursor-pointer'>Home</li>
                </Link>
                <Link to={'/products'}>
                    <li className='py-1 text-xs text-gray-500 hover:text-blue-400 cursor-pointer'>Products</li>
                </Link>
                <Link to={'/support'}>
                    <li className='py-1 text-xs font-medium text-gray-500 hover:text-blue-400 cursor-pointer'>Support</li>
                </Link>
                <Link to={'/about-us'}>
                <li className='py-1 text-xs font-medium text-gray-500 hover:text-blue-400 cursor-pointer'>About Us</li>
                    
                </Link>
            </ul>
        </div>
        <div>
            <ul className='text-white'>
                <h2 className='mb-2 font-bold text-gray-700'>Legal</h2>
                <li className='py-1 text-xs font-medium text-gray-500 hover:text-blue-400 cursor-pointer'>Privacy Policy</li>
                <li className='py-1 text-xs text-gray-500 hover:text-blue-400 cursor-pointer'>Services</li>
                <li className='py-1 text-xs font-medium text-gray-500 hover:text-blue-400 cursor-pointer'>Terms of Use</li>
                <li className='py-1 text-xs font-medium text-gray-500 hover:text-blue-400 cursor-pointer'>Cookie Policy</li>
            </ul>
        </div>
        <div>
            <ul className='text-white'>
                <h2 className='mb-2 font-bold text-gray-700'>Contact</h2>
                <Link to={'/contact'}>
                <li className='py-1 text-xs font-medium text-gray-500 hover:text-blue-400 cursor-pointer'>Email</li>
                <li className='py-1 text-xs text-gray-500 hover:text-blue-400 cursor-pointer'>Phone</li>
                <li className='py-1 text-xs font-medium text-gray-500 hover:text-blue-400 cursor-pointer'>Location</li>
                </Link>
            </ul>
        </div>
        <div className='col-span-4 mt-5 border w-full border-gray-300'></div>
        <p className='text-white text-xs py-3'>Copyright © SoftTrack LTD, 2025</p>
      </div>
    </div>
  )
}

export default Footer
