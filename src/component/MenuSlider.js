import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MenuSlider = ({ showMenu, setShowMenu }) => {
  const navigate = useNavigate();
  const navigateToregister = () => {
    navigate("/register");
  };
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <motion.div
      animate={{ x: -10 }}
      initial={{ x: 20 }}
      transition={{
        type: "spring",
        stiffness: 150,
      }}
      className="h-[15.5rem] w-[10rem] bg-transparent-white border-2 text-cust-white rounded-xl absolute top-[4rem] right-0"
    >
      <ul className="h-[11rem] text-white font-semibold text-center ">
        <li onClick={navigateHome} className="my-3">
          Home
        </li>
        <li className="my-3">Program</li>
        <li className="my-3">Extra-Curricular</li>
        <li className="my-3">Our Staff</li>
        <li className="my-3">Gallery</li>
      </ul>
      <button
        onClick={navigateToregister}
        className="h-[2.5rem] w-[9rem] ml-1 text-black rounded-full text font-semibold bg-cust-yellow"
      >
        Login/Register
      </button>
    </motion.div>
  );
};

export default MenuSlider;
