import React from "react";
import { useNavigate } from "react-router-dom";
import background from "./Assets/loginbg.svg";
import loginlogo from "./Assets/fino.jpg";
import man from "./Assets/loginman.jpeg";
import { FaUserAlt } from "react-icons/fa";
import { MdLock } from "react-icons/md";

const Login = () => {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/landing");
  }

  return (
    <div
      className="bg-cover bg-center h-svh relative flex justify-end"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute h-5/6 w-4/5">
        <div className="absolute  overflow z-20 right-[350px]">
          <img className="" src={loginlogo} alt="logo" />
  </div>

        <div className="absolute right-[290px] top-40 z-10 bg-gradient-to-r from-cyan-300 to-slate-50 text-5xl font-medium rounded-full p-3">Welcome to New Login Page of MTA</div>
         
        <div className="absolute right-0 bg-cover mt-[20px] h-[100%] w-[60%]" style={{ backgroundImage: `url(${man})` }} >
          {/* <div className='w-96 h-32 bg-gray-800 p-4'  >

                <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                    </div>
                        <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
                </div>

                <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                    </div>
                        <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
                </div>

                
                    <button className="bg-gray-400 py-2 px-5 rounded-lg" onClick={handleLogin}>Login</button>
                
            </div> */}

          <div className="h-72 w-[550px] absolute right-60 bottom-24">

            <div className="flex m-3 p-3 mb-5 bg-[#d0cfef] rounded-2xl">
              <div className="mx-3 ">
                <FaUserAlt />
              </div>
              <div>
                <input type="text" placeholder="User ID*" className="bg-[#d0cfef]" />
              </div>
            </div>
            <div className="flex m-3 p-3 mb-5 bg-[#d0cfef] rounded-2xl">
              <div className="mx-3">
                <MdLock />
              </div>
              <div>
                <input type="password" placeholder="Password*" className="bg-[#d0cfef]" />
              </div>
            </div>
            <button
              onClick={handleLogin}
              className="bg-[#d0cfef] py-3 px-8 rounded-xl ml-48 text-xl font-bold"
            >
              Login
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
