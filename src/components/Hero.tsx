"use client";
import React from 'react'
import BgBlurEffect2 from './ui/BgBlurEffect2';
import dynamic from 'next/dynamic';

const Hero = () => {

  const Scene = dynamic(() => import("@/components/RobotPlayground/Scene"), {ssr: false})
  return (
    <div className="relative h-screen w-full mt-20">
        <BgBlurEffect2/>

        <div className='relative w-full h-full flex md:flex-row-reverse items-center justify-center 
        md:px-20'>
          <div className='md:absolute md:right-24 h-[600px] max-md:w-full flex items-center justify-center md:w-1/2'>
            <Scene/>
            {/* Right div */}
          </div>
          <div className='absolute md:left-32 max-md:top-[500px] z-10 flex flex-col justify-center items-center
           md:w-1/2 md:pl-16 md:pb-24'>
            <h1 className='text-4xl font-extrabold font-Rubik'>DILUKSHAN</h1>
            <h1 className='text-4xl font-extrabold font-Rubik mt-1'>ABEYNAYAKA</h1>
            <span className='text-2xl font-bold font-Rubik mt-6'>Web and Mobile Developer</span>
            <p className='mx-10 mt-8 text-center font-roboto-mono'>
              With a passion for developing modern React web apps for commercial businesses.
            </p>
          </div>  
        </div>
    </div>
  )
}

export default Hero