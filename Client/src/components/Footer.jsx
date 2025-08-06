import React from 'react'
import { assets } from '../assets/assets.js'

function Footer() {
  return (
    <footer className="bg-white text-black px-6 md:px-20 py-10 mt-10 drop-shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left side: Logo and text in one row */}
        <div className="flex items-center gap-4">
          <img src={assets.Erase} alt="Logo" className="w-28" />
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} EraseBack. All rights reserved.
          </p>
        </div>

        {/* Right side - Social icons */}
        <div className="flex items-center gap-6">
          <a href="#" className="hover:opacity-75 transition">
            <img src={assets.facebook_icon} alt="Facebook" className="w-8" />
          </a>
          <a href="#" className="hover:opacity-75 transition">
            <img src={assets.twitter_icon} alt="Twitter" className="w-8" />
          </a>
          <a href="#" className="hover:opacity-75 transition">
            <img src={assets.google_plus_icon} alt="Google Plus" className="w-8" />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
