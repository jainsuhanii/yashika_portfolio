import React from 'react'

const Card = ({image, tittle, description, details}) => {
  return (
    <div className='flex w-[540px] h-[675px] flex-col rounded-2xl px-4 items-center bg-[#1F1F1F] justify-center flex-shrink-0'>

        <img src={image} alt="" className='w-[450px] h-[410px]'/>
        
        <div className='flex flex-col gap-2 mt-2 items-center justify-center'>
            <div className='text-3xl font-bold whitespace-normal'>
                {tittle}
            </div>
            <div className='text-[#5E5E5E] whitespace-normal'>
                {description}
            </div>
            <div className='text-[#5E5E5E] text-center whitespace-normal'>
                {details}
            </div>
        </div>
    </div>
  )
}

export default Card