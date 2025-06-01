import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< Updated upstream
import image from "../assets/image-copy.png";
import camera from "../assets/home-camera_layer.png";
import layer1 from "../assets/home-layer1.png";
import layer2 from "../assets/home-layer2.png";
import layer3 from "../assets/home-layer3.png";


const Home = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

=======

const Home = () => {
  const navigate = useNavigate();
  const IMAGE_URL = "https://d3jku4fwsszirg.cloudfront.net/assets/image-copy.png";
  const CAMERA_URL = "https://d3jku4fwsszirg.cloudfront.net/assets/home-camera_layer.png";
>>>>>>> Stashed changes
  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent">
      <h1 className="text-[180px] font-extralight">Portfolio</h1>

      <div className="relative w-[300px] h-[300px] mt-[-150px] size-[800px] overflow-hidden">
        {/* Layer 1 */}
        <img
<<<<<<< Updated upstream
          src={layer1}
          alt="Layer 1"
          className="absolute top-[30px] left-[-20px] w-[387px] h-[340px] object-contain opacity-100 z-[-1] pointer-events-none"
        />
        {/* Layer 2 */}
        <img
          src={layer2}
          alt="Layer 2"
          className="absolute mt-[30px] ml-[-20px] w-full h-full z-0 pointer-events-none overflow-hidden"
=======
          src={IMAGE_URL}
          alt="Folder Bottom"
          className="absolute left-0 top-0 w-full h-full object-cover"
>>>>>>> Stashed changes
        />
        <img
<<<<<<< Updated upstream
          src={camera}
          alt="camera image"
          className="w-36 h-36 z-2 ml-[100px] mt-[80px] cursor-pointer
             transition-all duration-300 ease-in-out
             hover:mt-[30px] hover:w-40 hover:h-40"
=======
          src={CAMERA_URL}
          alt="Camera Icon"
>>>>>>> Stashed changes
          onClick={handleClick}
        /> 
        {/* Layer 3 */}
        <img
          src={layer3}
          alt="Layer 3"
          className="absolute w-full h-full top-[-13px] right-[15px] w-[400px] h-[400px] object-contain opacity-60 z-1 mt-[40px] pointer-events-none"
        />
      </div>
      <p className="inline-flex whitespace-nowrap text-center size-30 ml-[-120px]">
  start with the camera, the rest are just tools.
</p>
    </div>
  );
};

export default Home;
