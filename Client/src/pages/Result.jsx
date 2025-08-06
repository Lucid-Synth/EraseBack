import React from 'react'
import { assets } from '../assets/assets.js'

function Result() {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
      <div className='bg-white rounded-xl drop-shadow-2xl p-6 text-black'>
        {/* Image Comparison Container */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
          {/* Left side */}
          <div className='text-center'>
            <p className='font-semibold mb-3 text-lg'>Original</p>
            <img src={assets.image_w_bg} alt="Original" className='rounded-lg w-full object-contain' />
          </div>

          {/* Right side */}
          <div className='text-center'>
            <p className='font-semibold mb-3 text-lg'>Background Removed</p>
            <img src={assets.image_wo_bg} alt="Removed Background" className='rounded-lg w-full object-contain' />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className='flex flex-col sm:flex-row gap-4 justify-center mt-10'>
        <button className='border border-black text-black rounded-full px-8 py-3.5 hover:bg-gray-100 transition-all duration-300'>
          Try another image
        </button>
        <a
          href="#"
          className='inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:scale-105 transition-all duration-700'
        >
          Download image
        </a>
      </div>
    </div>
  )
}

export default Result
