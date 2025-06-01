import Card from './Reusable/Card'
<<<<<<< Updated upstream
import chakra from '../assets/work/chakra.png'
import fnp from '../assets/work/fnp.png'
import fnp_4 from '../assets/work/fnp_4.png'
import chakra_4 from '../assets/work/chakra_4.png'
import side_arrow from '../assets/side_arrow.png'
import airwise from '../assets/work/airwise.png'
import airwise_4 from '../assets/work/airwise_4.png'
=======
>>>>>>> Stashed changes
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Work = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const CHAKRA = 'https://d3jku4fwsszirg.cloudfront.net/assets/work/chakra.png';
    const CHAKRA_4 = 'https://d3jku4fwsszirg.cloudfront.net/assets/work/chakra_4.png';  
    const FNP = 'https://d3jku4fwsszirg.cloudfront.net/assets/work/fnp.png';
    const FNP_4 = 'https://d3jku4fwsszirg.cloudfront.net/assets/work/fnp_4.png';
    const AIRWISE = 'https://d3jku4fwsszirg.cloudfront.net/assets/work/airwise.png';
    const AIRWISE_4 = 'https://d3jku4fwsszirg.cloudfront.net/assets/work/airwise_4.png';
    const SIDE_ARROW = 'https://d3jku4fwsszirg.cloudfront.net/assets/side_arrow.png';

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const data = [
        {
            image: CHAKRA,
            image_2: CHAKRA_4,
            title: "Chakra",
            description: "User research - Interface design",
            link: "https://www.behance.net/gallery/226495283/Chakra-UI-UX-case-study",
            details: "This project explores the challenges of organizing charity bike tours by engaging with tour owner, uncovering insights on logistics, community, and charitable impact. The goal is to design meaningful solutions that address the practical needs of biker-led social initiatives."
        },
        {
            image: FNP,
            image_2: FNP_4,
            title: "FNP",
            description: "Branding - Interface design",
            link:"https://www.behance.net/gallery/226486259/Ferns-and-Petals-%28FNP%29-Website-redesign",
            details: "This project is a redesign of the FNP (gifting platform) website, focused on creating a more intuitive, emotionally engaging, and visually cohesive user experience."
        },
        {
<<<<<<< Updated upstream
            image: airwise,
            image_2: airwise_4,
=======
            image: AIRWISE,
            image_2: AIRWISE_4,
>>>>>>> Stashed changes
            title: "Airwise",
            description: "User research - Interface design",
            link:"https://www.behance.net/gallery/226485279/Airwise",
            details: "This project explores the challenges users face in understanding and managing air quality. The goal is to design a meaningful solution that simplifies air monitoring and empowers users to take informed actions for healthier indoor living."
        }
    ]
  return (
    <div className='min-h-screen pb-8'>
        <div className='mx-4 sm:mx-6 md:mx-8 mt-3 md:mt-4 mb-2 text-base sm:text-lg md:text-xl gap-1 sm:gap-2 flex items-center cursor-pointer' onClick={() => navigate('/about')}>
            <img className='inline size-4 sm:size-5' src={SIDE_ARROW} alt="Back Arrow" />
            <div>
                Camera
            </div>
        </div>

        <div className='ml-4 sm:ml-8 md:ml-12 flex flex-col gap-4 md:gap-6 px-2 sm:px-4 md:px-6'>
            <div className='text-3xl sm:text-4xl md:text-5xl font-bold'>
                My Work
            </div>
            
            <div className='flex flex-col sm:flex-row overflow-x-auto gap-4 pb-4 sm:pb-0'>
                {data.map((item, index) => (
                    <Card 
                        key={index} 
                        image={item.image} 
                        image_2={item.image_2 || (isMobile ? item.image : null)}
                        tittle={item.title} 
                        description={item.description} 
                        details={item.details}  
                        onClick={()=> item.link && (window.location.href = item.link)}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work