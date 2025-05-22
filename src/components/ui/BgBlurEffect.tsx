import React from 'react'

const BgBlurEffect = () => {
  return (
    <section className='flex justify-center items-center dark:opacity-100 my-32 mx-32 relative z-0'>
        <div className='circularPosition w-[250px] h-[250px] bg-pink-500 
        rounded-full absolute z-1 top-[50%] left-[50%
        translate-x-[0%] translate-y-[0%] opacity-0'
        >
        </div>
        <div className='circularPosition w-[250px] h-[250px] bg-blue-500
        rounded-full absolute z-1 top-[50%] left-[50%
        translate-x-[50%] translate-y-[50%] opacity-0'
        >
        </div>

        <div className='absolute top-0 -left-0 w-72 h-72
        bg-purple-300 rounded-full mix-blend-multiply
        filter blur-3xl opacity-50'>
        </div>
        <div className='absolute top-0 left-40 w-72 h-72
        bg-yellow-300 rounded-full mix-blend-multiply
        filter blur-3xl opacity-50'>
        </div>
        <div className='absolute top-16 left-20 w-72 h-72
        bg-pink-300 rounded-full mix-blend-multiply
        filter blur-3xl opacity-50'>
        </div>
        

    </section>
    
  )
}

export default BgBlurEffect