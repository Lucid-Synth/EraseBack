import React from 'react'
import { assets } from '../assets/assets.js'
import { Link } from 'react-router-dom'
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'

function Navbar() {
  const { isSignedIn } = useUser()

  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
      <Link to='/'><img className='w-32 sm:w-44' src={assets.Erase} alt="Erase logo" /></Link>

      {isSignedIn ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <SignInButton mode="modal">
          <button className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full'>
            Get started <img src={assets.arrow_icon} alt="" />
          </button>
        </SignInButton>
      )}
    </div>
  )
}

export default Navbar
