import React from 'react'

import img1 from '../assets/features/features4.png'
import img2 from '../assets/features/features5.png'
import img3 from '../assets/features/features6.png'
import img4 from '../assets/features/features7.png'

const Features = () => {
  return (
    <section className='w-full p-6'>
        <div className=' bg-gray-100 max-w-[1240px] w-full mx-auto mt-40 gap-x-3.5 grid lg:grid-cols-2 items-center justify-center'>
            <div className='w-full'>
                <img className='w-full' src={img1} alt="" />
            </div>
            
            <div>
                <h1 className='text-3xl uppercase text-blue-500 py-4 font-bold text-center'>Improved GNSS tracking accuracy</h1>
                <p className=' font-medium text-xl tracking-wide'>Standalone L1 and L5 dual-band GNSS receiver ensures better track quality and quick time to first fix</p>
            </div>
        </div>

        <div className='bg-gray-100 max-w-[1240px] w-full mx-auto gap-x-3.5 grid lg:grid-cols-2 items-center justify-center'>
            <div>
                <h1 className='text-3xl uppercase text-blue-500 py-4 font-bold text-center'>Fast Installation</h1>
                <p className=' font-medium text-xl tracking-wide'>With U-type cable, virtually anyone can mount the device in 5 minutes or less directly on a car battery</p>
            </div>

            <div className='w-full'>
                <img className='w-full' src={img2} alt="" />
            </div>
        </div>

        <div className='max-w-[1240px] w-full mx-auto mt-10 gap-x-3.5 grid lg:grid-cols-2 items-center justify-center'>
            <div className='w-full'>
                <img className='w-full' src={img3} alt="" />
            </div>
            
            <div>
                <h1 className='text-3xl text-blue-500 py-4 uppercase font-bold text-center'>Robust casing</h1>
                <p className=' font-medium text-xl tracking-wide'>IP65-rated casing is designed to withstand poor weather conditions</p>
            </div>
        </div>

        <div className='max-w-[1240px] w-full mx-auto mt-10 gap-x-3.5 grid lg:grid-cols-2 items-center justify-center'>
            <div>
                <h1 className='text-3xl uppercase text-blue-500 py-4 font-bold text-center'>Extended product usage scenarios</h1>
                <p className=' font-medium text-xl tracking-wide'>Bluetooth® LE-based wireless connection of external devices, including Low Energy beacons and sensors, to monitor temperature, humidity, magnet detection, and movement</p>
            </div>

            <div className='w-full'>
                <img className='w-full' src={img4} alt="" />
            </div>
        </div>

        <div className='w-full bg-gray-100 h-full p-8'>
            <h1 className='font-bold text-blue-500 text-4xl pb-14 text-center uppercase'>Choose your model</h1>
        <div className='max-w-[1340px] mx-auto grid lg:grid-cols-4 justify-center items-center'>
            <div className='text-center'>
                <h1 className='font-bold py-3 text-2xl'>FMC 003</h1>
                <h3 className='py-4 font-medium'>4G</h3>
                <p className='tracking-wide'>TELTONIKA FMC003 4G GPS Tracker the most advanced OBD GPS Tracker device from the leading manufacturer Teltonika</p>
            </div>

            <div className='text-center h-full p-2'>
                <h1 className='font-bold py-3 text-2xl'>FMC800</h1>
                <h3 className='py-4 font-medium'>4G</h3>
                <p className='tracking-wide'>Plug & Play tracker with 4G LTE Cat 1 connectivity</p>
            </div>

            <div className='text-center h-full p-2'>
                <h1 className='font-bold py-3 text-2xl'>FTC881</h1>
                <h3 className='py-4 font-medium'>4G</h3>
                <p className='tracking-wide'>Next-generation high voltage 4G LTE Cat 1 battery-mounted vehicle GPS tracker with enhanced GNSS accuracy and IP69K resistance</p>
            </div>

            <div className='text-center h-full p-2'>
                <h1 className='font-bold py-3 text-2xl'>FTC880</h1>
                <h3 className='py-4 font-medium'>4G</h3>
                <p>Water-resistant high GNSS precision battery-mounted 4G LTE Cat M1 tracker</p>
            </div>
        </div>
        </div>
        <div className="w-full p-3 mt-24">
  <h1 className="text-center uppercase font-bold text-blue-500 text-3xl mb-10">
    Our product specifications
  </h1>

  <div className="max-w-[1000px] mx-auto bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl uppercase font-bold mb-6">Products</h2>

    {/* Spec Grid */}
    <div className="space-y-4">
      {/* Row */}
      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Model Name:</h3>
        <p className="text-sm">FMC003</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Technology:</h3>
        <p className="text-sm">LTE CAT 1 / GSM / GPRS / GNSS / BLUETOOTH® LE</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">GNSS:</h3>
        <div className="text-sm">
          <p>L1: GPS, GLONASS, GALILEO, BEIDOU, SBAS*, QZSS*</p>
          <p>L5: GPS, GALILEO, BEIDOU</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Receiver:</h3>
        <div className="text-sm">
          <p>L1: 75 acquisition/tracking channel</p>
          <p>L5: 60 tracking channel</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Tracking Sensitivity:</h3>
        <p className="text-sm">-165 dBM</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Position Accuracy:</h3>
        <p className="text-sm">1.5 m CEP</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Velocity Accuracy:</h3>
        <p className="text-sm">0.1 m/s (within ±15% error)</p>
      </div>
    </div>
  </div>

  <div className="max-w-[1000px] mt-4 mx-auto bg-white shadow-md rounded-lg p-6">

    {/* Spec Grid */}
    <div className="space-y-4">
      {/* Row */}
      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Model Name:</h3>
        <p className="text-sm">FTC881</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Technology:</h3>
        <p className="text-sm">LTE CAT 1 / GSM / GPRS / GNSS / BLUETOOTH® LE</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">GNSS:</h3>
        <div className="text-sm">
          <p>L1: GPS, GLONASS, GALILEO, BEIDOU, SBAS*, QZSS*</p>
          <p>L5: GPS, GALILEO, BEIDOU</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Receiver:</h3>
        <div className="text-sm">
          <p>L1: 75 acquisition/tracking channel</p>
          <p>L5: 60 tracking channel</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Tracking Sensitivity:</h3>
        <p className="text-sm">-165 dBM</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Position Accuracy:</h3>
        <p className="text-sm">1.5 m CEP</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Velocity Accuracy:</h3>
        <p className="text-sm">0.1 m/s (within ±15% error)</p>
      </div>
    </div>
  </div>

  <div className="max-w-[1000px] mt-4 mx-auto bg-white shadow-md rounded-lg p-6">

    {/* Spec Grid */}
    <div className="space-y-4">
      {/* Row */}
      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Model Name:</h3>
        <p className="text-sm">FTC880</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Technology:</h3>
        <p className="text-sm">LTE CAT 1/GSM/GPRS/GNSS/BLUETOOTH® LE</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">GNSS:</h3>
        <div className="text-sm">
          <p>L1: GPS, GLONASS, GALILEO, BEIDOU, SBAS* , QZSS*</p>
          <p>L5: GPS, GALILEO, BEIDOU</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Receiver:</h3>
        <div className="text-sm">
          <p>L1: 75 acquisition/tracking channel</p>
          <p>L5: 60 tracking channel</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Tracking Sensitivity:</h3>
        <p className="text-sm">-165 dBM</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Position Accuracy:</h3>
        <p className="text-sm">1.5 m CEP</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Velocity Accuracy:</h3>
        <p className="text-sm">0.1 m/s (within +/-15% error)</p>
      </div>
    </div>
  </div>
  <div className="max-w-[1000px] mt-4 mx-auto bg-white shadow-md rounded-lg p-6">

    {/* Spec Grid */}
    <div className="space-y-4">
      {/* Row */}
      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Model Name:</h3>
        <p className="text-sm">FMC800</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Technology:</h3>
        <p className="text-sm">
        LTE CAT 1/GSM/GPRS/GNSS/BLUETOOTH® LE</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">GNSS:</h3>
        <div className="text-sm">
          <p>GPS, GLONASS, GALILEO, BEIDOU, QZSS, AGPS</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Receiver:</h3>
        <div className="text-sm">
          <p>33 channel</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Tracking Sensitivity:</h3>
        <p className="text-sm">-165 dBM</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Position Accuracy:</h3>
        <p className="text-sm">.5 m CEP</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <h3 className="font-semibold">Velocity Accuracy:</h3>
        <p className="text-sm">0.1 m/s (within +/-15% error)</p>
      </div>
    </div>
  </div>
</div>
        
    </section>
  )
}

export default Features
