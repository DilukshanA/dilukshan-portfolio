import { GlobeDemo } from '@/components/GlobeDemo'
import { GoogleGeminiEffectDemo } from '@/components/GoogleGeminiEffectDemo'
import Navbar from '@/components/Navbar'
import React from 'react'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <div className='text-gray-500 mt-20'>
        <h1>Home</h1>
        {/* <GlobeDemo/> */}
      </div>

    </div>
  )
}

export default Main