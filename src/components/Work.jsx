import Card from './Reusable/Card'
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
<<<<<<< Updated upstream
    const ZUDO = 'https://d3jku4fwsszirg.cloudfront.net/assets/zudo.jpeg';
    const ZUDO_4 = 'https://d3jku4fwsszirg.cloudfront.net/assets/zudo_4.jpeg';
=======
    const ZUDO = 'https://d3jku4fwsszirg.cloudfront.net/assets/work/zudo.png';
    const ZUDO_4 = 'https://d3jku4fwsszirg.cloudfront.net/assets/work/zudo_4.png';
>>>>>>> Stashed changes

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
            image: ZUDO,
            image_2: ZUDO_4,
            title: "Zudo",
            description: "Sensory design - Product design",
            link: "https://www.behance.net/gallery/227109093/ZUDO-Sensory-product-design",
            details: "This project explores the challenge of reducing digital distractions and improving focus among students and  professionals. By engaging with user behaviors around procrastination, it aims to design an physical tool that supports structured work using the Pomodoro technique."
        },
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
            image: AIRWISE,
            image_2: AIRWISE_4,
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
                        onClick={() => item.link && window.open(item.link, '_blank')}                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work