import React from 'react'
import { assets } from '../assets/assets'

function Steps() {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Steps to remove background <br /> image in seconds
      </h1>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6 mt-16 xl:mt-24 w-full">
        {/* Card 1 */}
        <div className="flex flex-col sm:flex-row w-full md:w-auto max-w-sm items-start gap-4 bg-white shadow-[-5px_-5px_20px_rgba(0,0,0,0.1)] p-6 rounded-xl hover:scale-105 transition-all duration-500">
          <img className="w-8" src={assets.upload_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Upload image</p>
            <p className="text-sm text-neutral-500 mt-1"> Select your image and upload it in one click — no hassle, no waiting.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col sm:flex-row w-full md:w-auto max-w-sm items-start gap-4 bg-white shadow-[-5px_-5px_20px_rgba(0,0,0,0.1)] p-6 rounded-xl hover:scale-105 transition-all duration-500">
          <img className="w-8" src={assets.remove_bg_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Remove background</p>
            <p className="text-sm text-neutral-500 mt-1"> Our AI instantly removes the background with precision — in seconds.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col sm:flex-row w-full md:w-auto max-w-sm items-start gap-4 bg-white shadow-[-5px_-5px_20px_rgba(0,0,0,0.2)] p-6 rounded-xl hover:scale-105 transition-all duration-500">
          <img className="w-8" src={assets.download_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Download image</p>
            <p className="text-sm text-neutral-500 mt-1">Download your clean, background-free image instantly and use anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
