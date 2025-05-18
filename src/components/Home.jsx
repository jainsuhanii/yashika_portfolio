import React from 'react'
import layer1 from '../assets/home-layer1.png'
import layer2 from '../assets/home-layer2.png'
import layer3 from '../assets/home-layer3.png'

const Home = () => {
  return (
    <div className='flex flex-col items-top justify-center h-screen'>
      <h1 className='text-[180px] font-extralight'>Portfolio</h1>
      <div className='relative'>
        <img src={layer1} alt="Home Layer 1" className="absolute z-10" />
        <img src={layer2} alt="" className='absolute z-20'/>
        <img src={layer3} alt="Home Layer 3" className="absolute z-30" />
      </div>
    </div>
  )
}

export default Home
