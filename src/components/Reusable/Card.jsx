import { useState } from 'react';

const Card = ({image, image_2, tittle, description, details, onClick}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className='flex flex-col rounded-2xl px-3 sm:px-4 items-center bg-[#1F1F1F] justify-center flex-shrink-0
                    w-full sm:w-[380px] md:w-[480px] lg:w-[540px] 
                    h-auto min-h-[450px] sm:min-h-[550px] md:min-h-[600px] lg:h-[675px]'
                      onClick={onClick}
                      style={{cursor: 'pointer'}}
>
        <div 
          className='relative overflow-hidden w-full flex items-center justify-center cursor-pointer'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={isHovered && image_2 ? image_2 : image} 
            alt={tittle || "Project Image"} 
            className='w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:w-[450px] 
                      h-auto aspect-[11/10] object-cover my-4 sm:my-5 transition-all duration-500 ease-in-out transform'
            style={{ 
              transform: isHovered ? 'scale(1)' : 'scale(0.9)',
              opacity: 1,
              filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
            }}
          />
        </div>
        
        <div className='flex flex-col gap-1 sm:gap-2 mt-1 sm:mt-2 items-center justify-center px-3 sm:px-4 mb-4 sm:mb-6'>
            <div className='text-xl sm:text-2xl md:text-3xl font-bold text-center'>
                {tittle}
            </div>
            <div className='text-sm sm:text-base text-[#5E5E5E] text-center'>
                {description}
            </div>
            <div className='text-xs sm:text-sm md:text-base text-[#5E5E5E] text-center mt-1 sm:mt-2'>
                {details}
            </div>
        </div>
    </div>
  )
}

export default Card