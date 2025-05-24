import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/image-copy.png";
import camera from "../assets/home-camera_layer.png";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    alert("camera clicked");
    navigate("/about");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent">
      <h1 className="text-[180px] font-extralight">Portfolio</h1>

      <div className="relative w-[500px] h-[400px]">
        {/* Background Layer */}
        <img
          src={image}
          alt="Folder Bottom"
          className="absolute left-0 top-0 w-full h-full object-cover"
        />

        {/* Camera Layer */}
        <img
          src={camera}
          alt="Camera Icon"
          onClick={handleClick}
          className="
            absolute 
            left-1/2 
            top-[35%] 
            w-[40%] 
            h-[50%] 
            opacity-80 
            object-cover 
            cursor-pointer 
            transform 
            -translate-x-[20%] 
            -translate-y-[80%] 
            transition 
            duration-300 
            ease-in-out 
            hover:scale-125 
          "
          style={{
            backgroundColor: "transparent", // Ensures no background color
            border: "none", // Removes any applied borders
            outline: "none", // Prevents focus outlines
            filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.3))", // Adds a soft glow to blend edges
          }}
        />
      </div>
    </div>
  );
};

export default Home;
