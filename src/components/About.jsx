import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import resume from "../assets/resume/resume.png";
const About = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hoverWork, setHoverWork] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);

  const VIDEO_URL = "https://d3jku4fwsszirg.cloudfront.net/assets/Yashika.mp4";
  const WORK_IMG_URL =
    "https://d3jku4fwsszirg.cloudfront.net/assets/work/fnp.png";
  const CONTACT_IMG_URL =
    "https://d3jku4fwsszirg.cloudfront.net/assets/contact_me.png";
  const FNP_2_URL =
    "https://d3jku4fwsszirg.cloudfront.net/assets/work/fnp_2.png";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Yashika_Resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center md:justify-between py-3 md:py-6 px-2 md:px-0">
      {/* TOP section */}
      <div className="flex w-full md:w-[80%] justify-between items-center p-2 md:p-3 rounded-lg shadow-lg text-sm md:text-base">
        <div
          onClick={downloadResume}
          className="cursor-pointer hover:text-gray-300 transition-colors"
        >
          RESUME
        </div>
        <div
          className="hidden sm:block text-center cursor-pointer hover:text-gray-300 transition-colors"
          onClick={() => navigate("/")}
        >
          YASHIKA'S PORTFOLIO
        </div>
        <div>4K · 30</div>
      </div>

      {/* Video section */}
      <div className='flex w-[95%] sm:w-[90%] md:w-[83%] h-[50vh] sm:h-[60vh] md:h-[70%] relative my-4'>
  <video
    className="w-full rounded-[12px] md:rounded-[20px] h-full object-cover"
    src={VIDEO_URL}
    ref={videoRef}
    onPlay={() => setIsPlaying(true)}
    onPause={() => setIsPlaying(false)}
    playsInline    
  />
</div>

      {/* Bottom section */}
      <div className="flex w-[95%] sm:w-[90%] md:w-[80%] justify-between items-center">
        <div
          onClick={() => navigate("/work")}
          className="rounded-xl p-2 md:p-3 cursor-pointer relative overflow-hidden"
          onMouseEnter={() => setHoverWork(true)}
          onMouseLeave={() => setHoverWork(false)}
        >
          <img
            src={hoverWork ? FNP_2_URL : WORK_IMG_URL}
            className="size-[60px] sm:size-[80px] md:size-[110px] transition-all duration-500 ease-in-out transform"
            style={{
              transform: hoverWork ? "scale(1.2)" : "scale(1)",
              opacity: 1,
              filter: hoverWork ? "brightness(1.1)" : "brightness(1)",
            }}
            alt="My Work"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="text-[#FFE81A] text-lg sm:text-xl md:text-2xl text-center mb-1 md:mb-2">
            About Me
          </div>

          <div
            className="flex items-center justify-center p-1 border-2 md:border-4 border-white size-[60px] sm:size-[80px] md:size-[100px] rounded-full bg-transparent cursor-pointer transition-all duration-300"
            onClick={togglePlayPause}
          >
            {isPlaying ? (
              <div className="size-6 sm:size-8 md:size-10 rounded-md bg-[#F43939] transition-all duration-300 transform scale-100"></div>
            ) : (
              <div className="w-full h-full bg-[#F43939] rounded-full transition-all duration-300 transform scale-100"></div>
            )}
          </div>
        </div>

        <div
          className="rounded-full p-2 md:p-3 bg-[#2b2b2b]"
          onClick={() => navigate("/contact")}
          onMouseEnter={() => setHoverContact(true)}
          onMouseLeave={() => setHoverContact(false)}
        >
          <img
            className="size-10 sm:size-14 md:size-16 transition-transform duration-300"
            src={CONTACT_IMG_URL}
            alt="Contact Me"
            style={{ transform: hoverContact ? "scale(1.1)" : "scale(1)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
