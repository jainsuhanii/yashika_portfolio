import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import video from '../assets/video.mp4'
import work from '../assets/work.png'
import contact from '../assets/contact_me.png'

const About = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <div className='h-100vh flex flex-col items-center justify-center'>
      {/* TOP section  */}
      
      <div className='flex w-[80%] mt-[40px] justify-between items-center h-full p-4 rounded-lg shadow-lg'>
        <div>
          RESUME
        </div>
        <div>
          YASHIKA'S PORTFOLIO
        </div>
        <div>
          4K · 30
        </div>
      </div>

      {/* Video section */}

      <div className='flex w-[83%] h-[25%] relative'>
        <video 
          className="w-full rounded-[20px] h-full object-cover"
          src={video}
          // poster="/your-video-thumbnail.jpg"
          ref={videoRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>

      {/* Bottom section */}

      <div className='flex w-[80%] justify-between items-center'>
        <div onClick={() => navigate('/work')} className='rounded-full p-4 bg-[#2b2b2b] cursor-pointer'>
          <img src={work} className='size-[220px]' alt="" />
        </div>

        <div className='flex flex-col items-center justify-center'>
          <div className='text-[#FFE81A] text-3xl text-center mt-4 mb-2'>
                  About Me
          </div>

          <div 
          className='flex items-center justify-center p-1 border-6 border-white size-[150px] rounded-full bg-transparent cursor-pointer transition-all duration-300' 
          onClick={togglePlayPause}
          >
          {isPlaying ? (
            <div className="size-20 rounded-md bg-[#F43939] transition-all duration-300 transform scale-100"></div>
          ) : (
            <div className="w-full h-full bg-[#F43939] rounded-full transition-all duration-300 transform scale-100"></div>
          )}
          </div>  
        </div>


        <div className='rounded-full p-4 bg-[#2b2b2b]'>
          <img className='size-18' src={contact} alt="" />
        </div>
      </div>



    </div>
  )
}

export default About