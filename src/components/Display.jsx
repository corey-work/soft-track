import React from 'react'
import img1 from '../assets/4.png'
import img2 from '../assets/7.png'

const Display = () => {
  return (
    <div className='w-full p-4 bg-slate-100'>
      <div className='max-w-[1450px] w-full mx-auto grid lg:grid-cols-2 place-items-center'>
        <div className='relative py-5'>
            <img className='max-w-[400px] h-[300px] object-cover bg-white w-full border border-gray-200 brightness-55 rounded-xl hover:brightness-50' src={img1} alt="" />
            <div className='absolute uppercase inset-0 text-center p-5 flex flex-col items-center justify-center'>
                <h1 className='text-3xl py-5 items-start text-white font-bold'>Our Product Catalog</h1>
                <button className='px-4 py-3 mt-4 bg-blue-500 rounded-lg text-white  hover:bg-blue-800 transform duration-300 cursor-pointer'>Learn More &rarr;</button>
            </div>
        </div>
        <div className='relative uppercase'>
            <img className='max-w-[400px] h-[300px] object-cover bg-white w-full border border-gray-200 brightness-55 rounded-xl' src={img2} alt="" />
            <div className='absolute inset-0 text-center p-5 flex flex-col items-center justify-center'>
                <h1 className='text-3xl py-5 items-start text-white font-bold'>Use Case Catalog</h1>
                <button className='px-4 py-3 mt-4 bg-blue-500 rounded-lg text-white  hover:bg-blue-800 transform duration-300 cursor-pointer'>Learn More &rarr;</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Display
