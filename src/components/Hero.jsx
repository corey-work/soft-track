import React from 'react'
import hero from '../assets/hero1.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
      loading='lazy'
        className="w-full h-full object-cover brightness-50"
        src={hero}
        alt="SoftTrack Hero"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
          Welcome to <span className="text-blue-400">SoftTrack</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-xl drop-shadow-md mb-6">
          Track your valuable assets in real-time with powerful insights — powered by subscription-based GPS technology.
        </p>
        <Link to={'/products'}>
        <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-sm cursor-pointer shadow-lg transition-all duration-300">
          Discover More
        </button>
        
        </Link>
      </div>
    </div>
  )
}

export default Hero


