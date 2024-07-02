import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = ({ showMenu, setShowMenu }) => {
  return (
    <div className="h-[4rem] flex bg-[#fdfdf51d] fixed top-0 w-[100%]">
      <div className="h-[100%] w-[50%]  flex items-center justify-start">
        <img className="h-[3.8rem]" src="logo.png" alt="No image" />
      </div>
      <div className="h-[100%] w-[50%]  pr-3  flex justify-end items-center">
        {showMenu ? (
          <IoCloseSharp
            size="30"
            className="text-white mr-4"
            onClick={() => {
              setShowMenu(false);
            }}
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => {
              setShowMenu(true);
            }}
            size="30"
            // className="text-white"
            color="white"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
