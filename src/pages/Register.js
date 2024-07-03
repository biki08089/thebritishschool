import React from "react";
import { MdSlowMotionVideo } from "react-icons/md";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ setShowMenu }) => {
  const navigate = useNavigate();
  const navigatetoLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    setShowMenu(false);
  }, []);
  return (
    <div className="h-[100vh] bg-cust-white cmd:flex cmd:flex-row-reverse">
      <div
        id="bgImg"
        className="h-[50%] sm:w-[100%] xs:h-[70%] sm:h-[77%] md:h-[87%] cmd:h-[100%] cmd:w-[50%] "
      ></div>
      <div className="h-[33rem] xs:w-[28rem] xs:mx-auto sm:w-[32rem] sm:mx-auto md:w-[35rem] md:mx-auto cmd:w-[40rem] cmd:pt-[6rem] p-3 ">
        <div className="h-[3rem] my-2  flex justify-start items-center">
          <img className="h-[3.8rem]" src="logo.png" alt="No image" />
        </div>
        <div className="h-[4rem] my-3 ">
          <h1 className="font-bold text-[1.7rem]">Register Form</h1>
          <p className="text-[14px]">
            Already have an acount ?
            <span
              onClick={navigatetoLogin}
              className="font-semibold underline text-darkYellow"
            >
              login
            </span>
          </p>
        </div>
        <div className="h-[18rem] my-2 ">
          <form action="" className="">
            <div className=" flex my-2 ">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="mx-2 w-[50%] h-[2.9rem] rounded-lg p-2 border-2"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="mx-2 w-[50%] h-[2.9rem] rounded-lg p-2 border-2"
              />
            </div>
            <div className="px-2 my-2">
              <input
                placeholder="Enter Email"
                required
                type="email"
                className="w-[100%] mb-2 h-[2.9rem] rounded-lg p-2 border-2"
              />
              <input
                placeholder="Enter Password"
                required
                type="password"
                className="w-[100%] mb-2 h-[2.9rem] rounded-lg p-2 border-2"
              />
              <input
                placeholder="Confirm Password"
                required
                type="password"
                className="w-[100%] mb-2 h-[2.9rem] rounded-lg p-2 border-2"
              />
            </div>

            <div className="flex px-2 ">
              <div className="w-[50%] flex justify-center items-center">
                <label className="mr-1" htmlFor="Male">
                  Male
                </label>
                <input
                  type="checkbox"
                  name="Male"
                  value="Male"
                  required
                  className="mr-2"
                />
                <label className="mr-1" htmlFor="Female">
                  Female
                </label>
                <input type="checkbox" name="Female" value="Female" required />
              </div>
              <div className=" w-[50%]">
                <select className="w-[9.7rem] h-[2.9rem] rounded-lg p-2 border-2">
                  <option value="Adminstrator">Adminstrator</option>
                  <option value="Student">Student</option>
                </select>
                {/* <input className="w-[9.7rem] h-[2.9rem] rounded-lg p-2 border-2" type="text" placeholder="department" required  /> */}
              </div>
            </div>
            <button className="h-[2.5rem] w-[7rem] ml-1 mt-4 rounded-full font-semibold bg-[#dcd562]">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
