import React from "react";
import { MdSlowMotionVideo } from "react-icons/md";
import { useEffect } from "react";

const Hero = ({ setShowMenu }) => {
  useEffect(() => {
    setShowMenu(false);
  }, []);
  return (
    <div className="h-[100vh] bg-cust-white cmd:flex cmd:flex-row-reverse">
      <div
        id="bgImg"
        className="h-[50%] sm:w-[100%] sm:h-[77%] md:h-[87%] cmd:h-[100%] "
      ></div>
      <div className="h-[50%] p-3 sm:w-[90%] sm:mx-auto cmd:h-[100%] cmd:flex cmd:justify-center items-center">
        <div className="cmd:p-2">
          <div className="h-[70%] cmd:my-6 ">
            <div className="sm:flex">
              <h1 className="font-bold text-[25px] mx-1 sm:text-[2rem] ">
                BETTER
              </h1>
              <h1 className="font-bold text-[25px] mx-1 sm:text-[2rem] ">
                FUTURE FOR
              </h1>
            </div>
            <h1 className="font-bold text-[25px] mx-1 sm:text-[2rem]  cmd:my-[0.2rem]">
              YOUR KIDS.
            </h1>
            <p className="sm:text-[1.3rem] my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio aut ipsum cum. Hic consectetur quod commodi nisi.
            </p>
          </div>
          <div className="my-8 cmd:my-6">
            <div className="h-[30%]  flex justify-between items-center">
              <button className="h-[2.6rem] w-[8.5rem] font-semibold text-cust-white bg-cust-yellow2 rounded-full ">
                Join Us Today
              </button>
              <p className="flex items-center sm:mr-8">
                <span>
                  <MdSlowMotionVideo className="mr-1" />
                </span>
                Watch our Demo
              </p>
            </div>

            <div className="flex justify-start mt-3 cmd: my-6">
              <img
                src="ielts.png"
                className="h-[40px] sm:h-[60px] "
                alt="No image"
              />
              <img
                src="image.png"
                className="h-[40px] sm:h-[60px] "
                alt="No image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
