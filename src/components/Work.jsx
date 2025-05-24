import React from 'react'
import Card from './Reusable/Card'
import chakra from '../assets/work/chakra.png'
import fnp from '../assets/work/fnp.png'
import side_arrow from '../assets/side_arrow.png'
import { useNavigate } from 'react-router-dom'

const Work = () => {
    const navigate = useNavigate();
    const data = [
        {
            image: chakra,
            title: "Chakra",
            description: "User research - Interface design",
            details: "This project explores the challenges of organizing charity bike tours by engaging with tour owner, uncovering insights on logistics, community, and charitable impact. The goal is to design meaningful solutions that address the practical needs of biker-led social initiatives."
        },
        {
            image: fnp,
            title: "FNP",
            description: "Branding - Interface design",
            details: "This project is a redesign of the FNP (gifting platform) website, focused on creating a more intuitive, emotionally engaging, and visually cohesive user experience."
        },
        {
            image: chakra,
            title: "Airwise",
            description: "User research - Interface design",
            details: "This project explores the challenges of organizing charity bike tours by engaging with tour owner, uncovering insights on logistics, community, and charitable impact. The goal is to design meaningful solutions that address the practical needs of biker-led social initiatives."
        }
    ]
  return (
    <div className='h-screen'>
        <div className='mx-8 mt-4 mb-2 text-xl gap-2 flex items-center cursor-pointer' onClick={() => navigate('/about')}>
            <img className='inline size-5' src={side_arrow} alt="" />
            <div>
                Camera
            </div>
        </div>

        <div className='ml-12 flex flex-col gap-6 px-6'>
            <div className='text-5xl font-bold'>
                My Work
            </div>
            <div className='flex overflow-x-auto gap-4'>
                {data.map((item, index) => (
                    <Card 
                        key={index} 
                        image={item.image} 
                        tittle={item.title} 
                        description={item.description} 
                        details={item.details}  
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work