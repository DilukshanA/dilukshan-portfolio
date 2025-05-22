import React from 'react'

const BgBlurEffect2 = () => {
  return (
    <section className='absolute flex justify-center items-center dark:opacity-100 my-32 mx-32 z-0'>
        <div className='circularPosition w-[250px] h-[250px] bg-pink-500 
        rounded-full absolute z-1 top-[50%] left-[50%
        translate-x-[0%] translate-y-[0%] blur-[150px]'
        >
        </div>
        <div className='circularPosition w-[250px] h-[250px] bg-blue-500
        rounded-full absolute z-1 top-[50%] left-[50%
        translate-x-[50%] translate-y-[50%] blur-[150px]'
        >
        </div>
    </section>
  )
}

export default BgBlurEffect2