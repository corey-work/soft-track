import React from 'react'

const Information = () => {
  return (
    <div className='w-full px-2 bg-black'>
      <div className='max-w-[1400px] mx-auto items-start justify-center grid lg:grid-cols-2 place-items-center'>
        <div className='row-span-2 py-9 items-center justify-center'>
          <h1 className='font-bold lg:text-4xl text-3xl text-gray-600'>Our Scope</h1>
          <p className='font-bold lg:text-3xl text-blue-400'>The complete solution</p>
          <button className='px-4 py-3 mt-4 bg-blue-400 rounded-lg text-white hover:scale-125 hover:bg-blue-600 transform duration-300 cursor-pointer'>About Us</button>
        </div>

        <div className='hidden lg:grid lg:grid-rows-3 py-2 items-center justify-center'>
        <div className=''>
          <h1 className='text-2xl py-1 lg:text-center text-start font-bold text-gray-600'>Driven by Inovation</h1>
          <p className='lg:text-lg text-md font-medium text-white'>At SoftTrack, our talented in-house team based in London's Shoreditch High Street leads the innovation behind our cutting-edge tracking technology. We move fast — developing new features and products with agility to meet evolving market demands.
          Our commitment doesn't stop at launch. We're constantly enhancing our existing solutions, introducing new capabilities, and expanding functionality to ensure our users always stay ahead.</p>
        </div>
        <div className='mt-1'>
          <h1 className='text-2xl py-1 md:text-center font-bold text-gray-600'>Precise Manafacturing</h1>
          <p className='lg:text-lg text-sm font-medium text-white'>Every SoftTrack device is manufactured and assembled with care in our state-of-the-art facilities. By keeping production in-house, we maintain full control over quality and ensure that every unit meets our rigorous standards. Each device undergoes thorough testing before it reaches our customers — no compromises.</p>
        </div>
        <div className='mt-1'>
          <h1 className='text-2xl py-1 md:text-center font-bold text-gray-600'>Support</h1>
          <p className='lg:text-lg text-md font-medium text-white'>Our technical support team works closely with our developers to provide fast, knowledgeable assistance when you need it most. This close collaboration ensures rapid response times and seamless solutions, so you can stay focused on what matters: your operations.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Information
