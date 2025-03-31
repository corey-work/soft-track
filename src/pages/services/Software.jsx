import React from 'react'
import softwareBanner from '../../assets/software-banner.png'
import softwareImg1 from '../../assets/software2.png'

const Software = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-[400px]">
        <img
          src={softwareBanner}
          alt="Software Services"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
            Software Services
          </h1>
          <p className="text-white mt-2 text-lg drop-shadow-md max-w-2xl">
            Smart cloud-based solutions for real-time tracking, analytics, and device control.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        <h2 className="text-2xl font-bold text-gray-800">What We Offer</h2>
        <p className="text-gray-600 leading-relaxed">
          Our software platform gives you real-time access to device locations, performance analytics,
          and alert configurations — all from a secure, user-friendly dashboard. Whether you're managing
          a fleet or tracking individual assets, our tools are built for visibility and control.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Real-time device monitoring</li>
          <li>Custom alert triggers and reporting</li>
          <li>Multi-device management with roles</li>
          <li>Secure cloud access from any device</li>
        </ul>

        {/* Image Section */}
        <div className="p-6">
          <img
            src={softwareImg1}
            alt="SoftTrack Software Dashboard"
            className="rounded-xl w-full max-w-[500px] max-h-[400px] h-auto shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Software
