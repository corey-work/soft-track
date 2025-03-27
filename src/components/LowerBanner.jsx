import React from 'react'
import banner from '../assets/15.png'

const LowerBanner = () => {
  return (
    <div className='max-w-[1340px] overflow-auto max-h-auto w-full flex flex-col items-center justify-center relative p-3'>
      <img className='rounded-lg brightness-50 w-full object-cover' src={banner} alt="" />
      <div className='absolute inset-0 flex flex-col justify-center lg:items-start items-center pl-18'>
        <h1 className='text-3xl py-3 font-bold text-white'>Our Device Your Solution</h1>
        <p className='text-white tracking-wide font-semibold '>The most rewarding part for us is seeing our products in real-life solutions! We are constantly adding new use cases to our website, where our devices take part in solving all kinds of challenges around us.</p>
      <button className='border text-white border-white p-3 mt-4 hover:bg-white hover:text-blue-400 transition-all ease-in cursor-pointer'>Learn More</button>
      </div>
    </div>
  )
}

export default LowerBanner
