import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // Add logging to verify images are loading
  const layer1 = 'https://d3jku4fwsszirg.cloudfront.net/assets/home-layer1.png';
  const layer2 = 'https://d3jku4fwsszirg.cloudfront.net/assets/home-layer2.png';
  const layer3 = 'https://d3jku4fwsszirg.cloudfront.net/assets/home-layer3.png';
  const camera = 'https://d3jku4fwsszirg.cloudfront.net/assets/home-camera_layer.png';

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    navigate("/about");
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent px-4">
      <h1 className="text-[60px] py-11 md:py-2 sm:text-[100px] md:text-[140px] lg:text-[180px] font-extralight leading-tight">
        Portfolio
      </h1>

      <div className="relative w-[300px] h-[300px] mt-[-150px] size-[800px] overflow-hidden">
        {/* Layer 1 */}
        <img
          src={layer1}
          alt="Layer 1"
          className="absolute top-[30px] left-[-20px] w-[387px] h-[340px] object-contain opacity-100 z-[-1] pointer-events-none"
        />
        {/* Layer 2 */}
        <img
          src={layer2}
          alt="Layer 2"
          className="absolute mt-[30px] ml-[-20px] w-full h-full z-0 pointer-events-none overflow-hidden"
        />
        <img
          src={camera}
          alt="camera image"
          className="w-36 h-36 z-2 ml-[100px] mt-[80px] cursor-pointer
             transition-all duration-300 ease-in-out
             hover:mt-[30px] hover:w-40 hover:h-40"
          onClick={handleClick}
        /> 
        {/* Layer 3 */}
        <img
          src={layer3}
          alt="Layer 3"
          className="absolute w-full h-full top-[-14px] right-[15px] w-[400px] h-[400px] object-contain opacity-60 z-1 mt-[40px] pointer-events-none"
        />
      </div>
      <p className="text-[16px] sm:text-[18px] md:text-[20px] text-center mt-2 sm:mt-0">start with the camera, the rest are just tools.</p>
    </div>
  );
};

export default Home;
