import React from 'react'
import servicesBanner from '../../assets/services-banner.png' 

const Services = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-[400px]">
        <img
          src={servicesBanner}
          alt="Services Banner"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-white mt-2 text-lg drop-shadow-md max-w-2xl">
            Explore our tailored tracking software and robust hardware offerings — designed to work together seamlessly.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Software */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Software Solutions</h2>
          <p className="text-gray-600 mb-4">
            Our cloud-based tracking platform provides real-time visibility, alerts, device management,
            and reporting all accessible from any device.
          </p>
          <a href="/services/software" className="text-blue-600 font-medium hover:underline">Learn more →</a>
        </div>

        {/* Hardware */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Hardware Devices</h2>
          <p className="text-gray-600 mb-4">
            We offer a curated range of high-performance tracking hardware including GPS devices,
            routers, modems, and accessories to support any use case.
          </p>
          <a href="/services/hardware" className="text-blue-600 font-medium hover:underline">Learn more →</a>
        </div>
      </div>
    </div>
  )
}

export default Services
