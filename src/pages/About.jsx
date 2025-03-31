import React from 'react'
import aboutBanner from '../assets/about-banner.png' // Replace with your banner image

const About = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-[400px]">
        <img
          src={aboutBanner}
          alt="About SoftTrack"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
            About Us
          </h1>
          <p className="text-white mt-2 text-lg drop-shadow-md max-w-2xl">
            Powering next-gen asset tracking through innovation, reliability, and security.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Who We Are</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          SoftTrack is a forward-thinking technology company dedicated to delivering smart tracking
          solutions for businesses and individuals. With a focus on intuitive design, secure
          infrastructure, and dependable performance, we provide the tools you need to monitor what
          matters most — anytime, anywhere.
        </p>
      </div>

      {/* Mission & Values */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Mission</h2>
          <p className="text-gray-700 text-lg mb-12">
            To empower businesses and individuals with reliable, secure, and easy-to-use tracking
            technology that transforms the way they manage assets, vehicles, and operations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-blue-500 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve our products to stay ahead of the curve and meet the changing
                needs of our customers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-500 mb-2">Security</h3>
              <p className="text-gray-600">
                Protecting your data and privacy is our top priority — our platform is built with
                security at its core.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-500 mb-2">Reliability</h3>
              <p className="text-gray-600">
                From hardware to software, every SoftTrack solution is engineered for dependability
                in real-world conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Vision/Team Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Looking Ahead</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We envision a connected world where tracking is seamless, intelligent, and accessible to
          everyone. Our team is passionate about making this vision a reality — one device, one
          dashboard, one breakthrough at a time.
        </p>
      </div>
    </div>
  )
}

export default About
