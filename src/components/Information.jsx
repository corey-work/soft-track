import React from 'react'

const Information = () => {
  return (
    <div className='w-full px-2'>
      <div className='max-w-[1400px] mx-auto items-center justify-center grid grid-cols-2 place-items-center'>
        <div className='row-span-2 p-3 items-center justify-center'>
          <h1 className='font-bold text-center lg:text-4xl text-gray-600'>Our Scope</h1>
          <p className='font-bold text-center lg:text-3xl text-blue-600'>The complete solution</p>
          <button className='px-4 py-3 mt-4 bg-blue-500 rounded-lg text-white hover:scale-125 hover:bg-blue-800 transform duration-300 cursor-pointer'>About Us</button>
        </div>

        <div className='grid grid-rows-3 py-10 items-center justify-center'>
        <div>
          <h1 className='lg:text-2xl font-bold text-gray-800'>Design</h1>
          <p className='lg:text-xl text-lg font-medium text-black/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam ipsam eligendi. Id itaque laudantium temporibus rem repudiandae voluptas asperiores aspernatur quod obcaecati, facere aperiam incidunt vel autem tempora perferendis.</p>
        </div>
        <div className='mt-4'>
          <h1 className='lg:text-2xl font-bold text-gray-800'>Manafacturing</h1>
          <p className='lg:text-xl text-lg font-medium text-black/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam ipsam eligendi. Id itaque laudantium temporibus rem repudiandae voluptas asperiores aspernatur quod obcaecati, facere aperiam incidunt vel autem tempora perferendis.</p>
        </div>
        <div className='mt-4'>
          <h1 className='lg:text-2xl font-bold text-gray-800'>Support</h1>
          <p className='lg:text-xl text-lg font-medium text-black/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam ipsam eligendi. Id itaque laudantium temporibus rem repudiandae voluptas asperiores aspernatur quod obcaecati, facere aperiam incidunt vel autem tempora perferendis.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Information
