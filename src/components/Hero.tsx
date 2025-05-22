import React from 'react'
import Image from 'next/image';
import bg_gradient from './../../public/assets/bg_gradient.jpg'
import BgBlurEffect2 from './ui/BgBlurEffect2';

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
        <BgBlurEffect2/>

        {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4">
        {/* First Div Content */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Site</h1>
          <p className="mt-2 text-lg md:text-xl">Discover amazing experiences</p>
        </div>

        {/* Second Div Content */}
        <div>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero