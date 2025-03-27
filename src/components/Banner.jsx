import React from 'react'
import banner from '../assets/rms1.png'

const Banner = ({ children }) => {
  return (
    <div>
      <div className='relative py-5'>
      <img className='w-full brightness-40 py-4 max-h-[300px] object-cover' src={banner} alt="" />
      <div className='absolute px-7 inset-0 flex flex-col items-start justify-center'>
        <h1 className='text-5xl font-bold text-white'>{children}</h1>
        <button className='px-4 py-3 mt-4 bg-blue-400 rounded-lg text-white  hover:bg-blue-600 transform duration-300 cursor-pointer'>Click Here</button>
      </div>
      </div>
    </div>
  )
}

export default Banner
