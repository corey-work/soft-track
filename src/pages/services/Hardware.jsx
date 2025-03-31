import React from 'react'
import hardwareBanner from '../../assets/hardware-banner.png'
import hardwareImg1 from '../../assets/software3.png'
import teltonikaLogo from '../../assets/teltonika-logo.png'

const Hardware = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-[400px]">
        <img
          src={hardwareBanner}
          alt="Hardware Services"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">Hardware Solutions</h1>
          <p className="text-white mt-2 text-lg drop-shadow-md max-w-2xl">
            Rugged, reliable tracking hardware engineered for accuracy and uptime.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        <h2 className="text-2xl font-bold text-gray-800">Our Devices</h2>
        <p className="text-gray-600 leading-relaxed">
          We are partnered with Teltonika Networks to supply advanced tracking hardware that integrates seamlessly with our software platform via
          dashboard to track devices by ease.
          
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>GPS asset trackers with long battery life</li>
          <li>Dashboard interface included</li>
          <li>Plug-and-play modems and accessories</li>
          <li>Certified for harsh environments</li>
        </ul>

        <div>
            <img src={teltonikaLogo} alt="" />
        </div>

        <div className="p-6">
            <img
                src={hardwareImg1}
                alt="SoftTrack Software Dashboard"
                className="rounded-xl w-full max-w-[500px] h-auto shadow-lg"
                />
        </div>
      </div>
    </div>
  )
}

export default Hardware
