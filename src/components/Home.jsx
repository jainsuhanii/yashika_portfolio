import React, { use, useState } from "react";
import layer1 from "../assets/home-layer1.png";
import layer2 from "../assets/home-layer2.png";
import layer3 from "../assets/home-layer3.png";
import camera from "../assets/home-camera_layer.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // Add logging to verify images are loading
  const [isCameraHovered, setIsCameraHovered] = useState(false);
  const naviage = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-[180px] font-extralight">Portfolio</h1>

      {/* Fix the nested divs issue - only one container */}
      <div
        style={{
          position: "relative",
          width: "500px",
          height: "400px",
        }}
        onClick={() => {
          naviage("/about");
        }}
      >
        {/* Layer 1 - with background color for visibility debugging */}
        <img
          src={layer1}
          alt="Folder Bottom"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 15,
            objectFit: "cover",
          }}
        />
        <img
          src={camera}
          alt="Camera"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 15,
            objectFit: "cover",
            transition: "transform 0.3s ease",
            transform: isCameraHovered ? "translateY(-25px)" : "translateY(0)",
            cursor: "pointer",
          }}
          onMouseEnter={() => setIsCameraHovered(true)}
          onMouseLeave={() => setIsCameraHovered(false)}
        />

        {/* Layer 2 */}
        <img
          src={layer2}
          alt="Folder Content"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 20,
            backgroundColor: "rgba(0,255,0,0.1)", // Debug tint
            objectFit: "cover",
          }}
        />

        {/* Layer 3 */}
        <img
          src={layer3}
          alt="Folder Top"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 30,
            backgroundColor: "rgba(0,0,255,0.1)", // Debug tint
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
