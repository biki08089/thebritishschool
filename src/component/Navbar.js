import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = ({ showMenu, setShowMenu }) => {
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/register");
  };

  const navigateHome = () => {
    navigate("/");
  };
  return (
    <div className="h-[4rem] flex justify-between bg-transparent-white  fixed top-0 w-[100%]">
      <div className="h-[100%] w-[5rem]   flex items-center justify-start">
        <img className="h-[3.8rem] ml-3" src="logo.png" alt="No image" />
      </div>
      <div className="h-[100%] w-[35rem] hidden cmd:flex items-center justify-center ">
        <ul className=" flex font-normal text-center ">
          <li onClick={navigateHome} className="mx-3">
            Home
          </li>
          <li className="mx-3">Program</li>
          <li className="mx-3">Extra-Curricular</li>
          <li className="mx-3">Our Staff</li>
          <li className="mx-3">Gallery</li>
        </ul>
      </div>
      <div className="cmd:flex hidden h-[100%] w-[11rem] pr-3  justify-end items-center">
        <button
          onClick={navigateRegister}
          className=" h-[2.5rem] w-[9rem] ml-1 text-cust-white rounded-full text font-semibold bg-cust-yellow"
        >
          Login/Register
        </button>
      </div>
      <div className="cmd:hidden h-[100%] w-[5rem] pr-3  flex justify-end items-center">
        {showMenu ? (
          <IoCloseSharp
            size="30"
            className="text-white mr-4"
            onClick={() => {
              setShowMenu(false);
            }}
            color="white"
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => {
              setShowMenu(true);
            }}
            size="30"
            className="mr-2"
            color="white"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
