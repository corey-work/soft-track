import React from 'react'

const CallToAction = () => {
  return (
    <div className='w-full p-6 mt-12'>
      <div className='max-w-[1240px] mx-auto w-full flex items-center justify-center'>
            <div className='max-w-[600px]'>
                <h1 className='text-4xl py-3 font-bold text-blue-400 text-center'>Our Focus</h1>
                <p className='text-black/60 font-medium tracking-wide'>At SoftTrack, our product development revolves around three key pillars: reliability, security, and ease of use. These values are the foundation of every solution we build and are critical to the success of any IoT-powered system.</p>
            </div>
      </div>

            <div className='max-w-[100rem] mt-15 gap-3 mx-auto grid lg:grid-cols-3 items-center justify-center'>
            <div className='text-center max-h-[40rem] h-full p-3 border border-gray-300 bg-zinc-300 rounded-lg'>
                <h1 className='py-4 text-2xl font-bold text-blue-400'>Reliable</h1>
                <p className='font-medium tracking-wide text-gray-800'>Reliability is at the heart of SoftTrack. Our devices are built to perform in even the toughest environments, ensuring consistent tracking and connectivity. With built-in redundancy and backup options, you can count on SoftTrack to stay online when it matters most.</p>
            </div>

            <div className='text-center max-h-[40rem] h-full p-3 border border-gray-300 bg-zinc-300 rounded-lg'>
                <h1 className='py-4 text-2xl font-bold text-blue-400'>Secure</h1>
                <p className='font-medium tracking-wide text-gray-800'>Security is never an afterthought. We implement rigorous safety protocols, conduct regular system audits, and release frequent firmware updates to keep your data protected and your devices secure from emerging threats.</p>
            </div>

            <div className='text-center max-h-[40rem] h-full p-3 border border-gray-300 bg-zinc-300 rounded-lg'>
            <h1 className='py-4 text-2xl font-bold text-blue-400'>Easy to Use</h1>
            <p className='font-medium tracking-wide text-gray-800'>Though designed for professional-grade applications, SoftTrack devices remain incredibly user-friendly. With intuitive setup and operation, there's no need for specialized training — just plug in and start tracking.</p>
            </div>

            </div>
    </div>
  )
}

export default CallToAction
