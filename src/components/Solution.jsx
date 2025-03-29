import React from 'react'
import certificate from '../assets/certificate.png'
import solutionImg from '../assets/solution.png'

const Solution = () => {
  return (
    <div className='w-full p-3 mt-12'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-5'>
        <div className='relative'>
            <img className='rounded-lg brightness-30' src={certificate} alt="" />
            <div className='absolute text-white p-7 inset-0 flex flex-col justify-center items-center'>
                <h1 className='font-bold py-2 text-3xl uppercase'>Certification Program</h1>
                <p>SoftTrack Networks Certification Program will benefit Sales and Technical teams by awarding 360° knowledge with our devices and systems, their use cases, competitive landscape, troubleshooting, and more.</p>
                <button className='border border-white p-3 mt-4 hover:bg-white hover:text-blue-400 transition-all ease-in cursor-pointer'>Learn More</button>
            </div>
        </div>
        <div className='relative '>
            <img className='rounded-lg brightness-30' src={solutionImg} alt="" />
            <div className='absolute text-white p-7 inset-0 flex flex-col justify-center items-center'>
                <h1 className='font-bold py-2 text-3xl uppercase'>Share Your Solution</h1>
                <p>We created a platform for sharing your solutions for SoftTrack products. Click on the link below to upload images and video files, and we will gladly share them with our audience!</p>
                <button className='border border-white p-3 mt-4 hover:bg-white hover:text-blue-400 transition-all ease-in cursor-pointer'>Upload Now</button>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Solution
