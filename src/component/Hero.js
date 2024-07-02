import React from "react";
import { MdSlowMotionVideo } from "react-icons/md";
import { useEffect } from "react";


const Hero = ({setShowMenu}) => {
  
  useEffect(()=>{
    setShowMenu(false)
  },[])
  return (
    <div className="h-[100vh] bg-[#fdfdf5] ">
      <div id="bgImg" className="h-[50%] "></div>
      <div  className="h-[50%] p-3">
        <div className="h-[70%] ">
          <h1 className="font-bold text-[25px]">BETTER</h1>
          <h1 className="font-bold text-[25px]">FUTURE FOR</h1>
          <h1 className="font-bold text-[25px]">YOUR KIDS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            aut ipsum cum. Hic consectetur quod commodi nisi.
          </p>
        </div>
        <div>
          <div className="h-[30%]  flex justify-between items-center">
            <button className="h-[2.6rem] w-[8.5rem] font-semibold text-white bg-[#d0b163] rounded-full ">
              Join Us Today
            </button>
            <p className="flex items-center">
              <span>
                <MdSlowMotionVideo className="mr-1" />
              </span>
              Watch our Demo
            </p>
          </div>

          <div className="flex justify-start mt-1">
            <img src="ielts.png" className="h-[40px] " alt="No image" />
            <img src="image.png" className="h-[40px] " alt="No image" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
