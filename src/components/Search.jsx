import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const Search = () => {
  return (
    
    <div className='relative group hidden sm:block items-center text-black'>
        <input className='bg-white w-[200px] group-hover:w-[300px] rounded-full border border-blue-500 
        px-2 py-1 focus:outline-none focus:border-1 focus:border-blue-500 
        transition-all duration-300' type="text" />
        <IoIosSearch size={20} className='absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-blue-500' />
    </div>
    
  )
}

export default Search
