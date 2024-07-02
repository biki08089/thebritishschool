import React from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate=useNavigate();
    const navigateToRegister=()=>{
        navigate("/register")
    }
    
    const successLogin=()=>{
        navigate("/register/admin");
    }


  return (
    <div className="h-[100vh] bg-[#fdfdf5] ">
      <div id="bgImg" className="h-[50%] "></div>
      <div className="h-[20rem] p-3 ">
        <div className="h-[3rem] my-2  flex justify-start items-center">
          <img className="h-[3.8rem]" src="logo.png" alt="No image" />
        </div>
        <div className="h-[4rem] my-3 ">
          <h1 className="font-bold text-[1.7rem]">Login Here.</h1>
          <p className="text-[14px]">
            <span>doesn't have an acount ?</span>
            <span onClick={navigateToRegister} className="font-semibold underline text-yellow-500">
                
                Sign up</span>
          </p>
        </div>
        <div className="h-[14rem] my-2 ">
          <form onSubmit={successLogin} action="" className="">
            <div className="px-2 my-2">
              <input
                placeholder="Enter your Email"
                required
                type="email"
                className="w-[100%] mb-2 h-[2.9rem] rounded-lg p-2 border-2"
              />
              <input
                placeholder="Enter Your Password"
                required
                type="Password"
                className="w-[100%] h-[2.9rem] rounded-lg p-2 border-2"
              />
            </div>

            <button  className="h-[2.5rem] w-[7rem] ml-1 mt-4 rounded-full font-semibold bg-[#dcd562]">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
