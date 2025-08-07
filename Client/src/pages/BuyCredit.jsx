import React from 'react'
import { assets, plans } from '../assets/assets.js'

function BuyCredit() {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10 px-4 md:px-20'>
      <button className='border border-gray-400 text-black rounded-3xl px-8 py-3 hover:bg-gray-100 transition-all duration-300'>
        Our Plans
      </button>

      <h1 className='text-2xl md:text-3xl lg:text-4xl mt-10 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Choose the plan that's right for you
      </h1>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14'>
        {plans.map((item, index) => (
          <div
            key={index}
            className='bg-white drop-shadow-xl rounded-xl p-6 flex flex-col items-center justify-between h-[460px] transition hover:scale-105'
          >
            <img src={assets.logo_icon} alt='Logo' className='w-12 mb-4' />
            <p className='text-xl font-semibold mb-2'>{item.id}</p>
            <p className='text-gray-500 mb-4'>{item.desc}</p>
            <p className='text-2xl font-bold mb-6'>
              ₹{item.price} <span className='text-sm font-normal'>/ {item.credits} credits</span>
            </p>
            <button className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:scale-105 transition-all duration-700'>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit
