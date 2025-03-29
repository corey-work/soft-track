import React from 'react'

const NewsLetter = () => {
  return (
    <div className='max-w-[1100px] mt-7 mb-7 rounded-lg mx-auto w-full px-3 bg-black'>
      <div className='max-w-[80rem] p-3 mx-auto grid lg:grid-cols-3'>
        <div className='col-span-3 py-4 text-white'>
            <h1 className='font-semibold pb-1'>For the latest, sign up to our newsletter</h1>
            <input className='bg-zinc-500 text-black px-2 py-2 rounded-xl w-1/2 focus:outline-none focus:border-2 focus:bg-white focus:border-blue-400 transition-all ease-in-out duration-100' placeholder='Enter you email...' type="text" />
            <button className='px-5 py-2  ml-3 bg-blue-400 rounded-lg text-white  hover:bg-blue-800 transform duration-300 cursor-pointer'>Sign Me Up</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
