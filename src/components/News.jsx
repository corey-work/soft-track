import React from 'react'
import img1 from '../assets/news1.png'
import img2 from '../assets/news2.png'
import img3 from '../assets/news3.png'

const News = () => {
  return (
    <div className='w-full p-4 bg-black'>
        <h1 className='text-center pb-6 font-bold text-4xl text-blue-400'>Latest News</h1>
      <div className='max-w-[1240px] w-full mx-auto grid lg:grid-cols-3 place-items-center gap-3'>
        <div>
            <img className='hover:brightness-50 transition-all ease-in-out duration-300 cursor-pointer' src={img1} alt="" />
            <i className='text-gray-400 text-xs'>18th Febuary 2025</i>
            <p className='tracking-wide text-white flex-wrap text-sm font-medium hover:underline cursor-pointer duration-300'>Unlock the potential of your IoT solutions with RutOS 7.13</p>
        </div>
        <div>
            <img className='hover:brightness-50 transition-all ease-in-out duration-300 cursor-pointer' src={img2} alt="" />
            <i className='text-gray-400 text-xs'>28th Febuary 2025</i>
            <p className='flex-wrap text-white text-sm font-medium hover:underline cursor-pointer'>Unlock the Future with 5G Routers at Hannover Messe 2025</p>
        </div>
        <div>
            <img className='hover:brightness-50 transition-all ease-in-out duration-300 cursor-pointer' src={img3} alt="" />
            <i className='text-gray-400 text-xs'>6th March 2025</i>
            <p className='flex-wrap text-white text-sm font-medium hover:underline cursor-pointer'>Enhanced connectivity capabilities with the RUT206 4G router </p>
        </div>
      </div>
    </div>
  )
}

export default News
