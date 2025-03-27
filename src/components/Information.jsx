import React from 'react'

const Information = () => {
  return (
    <div className='w-full px-2 bg-black'>
      <div className='max-w-[1400px] mx-auto items-center justify-center grid lg:grid-cols-2 place-items-center'>
        <div className='row-span-2 py-9 items-center justify-center'>
          <h1 className='font-bold lg:text-4xl text-3xl text-gray-600'>Our Scope</h1>
          <p className='font-bold lg:text-3xl text-blue-400'>The complete solution</p>
          <button className='px-4 py-3 mt-4 bg-blue-400 rounded-lg text-white hover:scale-125 hover:bg-blue-600 transform duration-300 cursor-pointer'>About Us</button>
        </div>

        <div className='grid lg:grid-rows-3 py-10 items-center justify-center'>
        <div className='py-2'>
          <h1 className='text-2xl py-1 lg:text-center text-start font-bold text-gray-600'>Design</h1>
          <p className='lg:text-xl text-lg font-medium text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam ipsam eligendi. Id itaque laudantium temporibus rem repudiandae voluptas asperiores aspernatur quod obcaecati, facere aperiam incidunt vel autem tempora perferendis.</p>
        </div>
        <div className='mt-4'>
          <h1 className='text-2xl py-1 md:text-center font-bold text-gray-600'>Manafacturing</h1>
          <p className='lg:text-xl text-lg font-medium text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam ipsam eligendi. Id itaque laudantium temporibus rem repudiandae voluptas asperiores aspernatur quod obcaecati, facere aperiam incidunt vel autem tempora perferendis.</p>
        </div>
        <div className='mt-4'>
          <h1 className='text-2xl py-1 md:text-center font-bold text-gray-600'>Support</h1>
          <p className='lg:text-xl text-lg font-medium text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam ipsam eligendi. Id itaque laudantium temporibus rem repudiandae voluptas asperiores aspernatur quod obcaecati, facere aperiam incidunt vel autem tempora perferendis.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Information
