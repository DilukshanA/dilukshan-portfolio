import { GlobeDemo } from '@/components/GlobeDemo'
import { GoogleGeminiEffectDemo } from '@/components/GoogleGeminiEffectDemo'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import BgBlurEffect from '@/components/ui/BgBlurEffect'
import BgBlurEffect2 from '@/components/ui/BgBlurEffect2'
import React from 'react'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* <BgBlurEffect/> */}
      <BgBlurEffect2/>
    </div>
  )
}

export default Main