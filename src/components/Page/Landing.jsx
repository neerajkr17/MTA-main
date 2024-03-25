import React from "react";
// import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import user from "../Assets/landingUser.svg";
import image from "../Assets/image.png";
import pie from "../Assets/pie.png";



const Landing = () => {
  
  return (
    <div className="h-svh min-h-screen bg-gradient-to-bl from-sky-400 via-sky-300 to-red-300">
      <Navbar/>
      <div className="open-container flex relative">
        <div >
          <Sidebar/>
        </div>
<div className="flex flex-col ml-40 absolute right-40">

        <div className="flex m-8">

          <div className="bg-gray-200  p-6 rounded-lg m-8 text-center">
            <span className="text-2xl font-semibold">Total Merchants</span>
            <img className="ml-5 py-4" src={user} alt="user" />
            <span className="text-2xl font-bold">100</span>
          </div>

          <div className="bg-gray-200 flex rounded-lg m-8 p-6">
            <div>
            <div>
              <h1 className="text-2xl font-bold text-center">Merchant Status</h1>
              <img className="h-40 ml-20" src={image} alt="" />
            </div>
            <div className="flex p-2 m-2">
              <span className="mr-4">
                <h1 className="text-green-600 text-center font-semibold">Active Merchants</h1>
                <h1 className="text-green-600 text-center font-bold">90</h1>
              </span>
              <span>
                <h1 className="text-red-600 text-center font-semibold">In Active Merchants</h1>
                <h1 className="text-red-600 text-center font-bold">10</h1>
              </span>
            </div>
            </div>
            <img className="h-60" src={pie} alt="" />
          </div>

        </div>

        <div className="border-8 rounded-lg p-4">
          <h1 className="text-center text-3xl font-bold py-2">Merchant Maker Checker Status</h1>

          <div className="flex px-24">

            <div className="border-2 bg-sky-100	 border-black rounded-md m-2 p-4 mr-8">
              <div className="text-2xl text-center text-blue-800 font-semibold px-4">Maker</div>
              <div className="text-2xl text-center text-blue-800 font-semibold px-4">Request</div>
              <div className="text-2xl text-center text-sky-800 font-semibold px-4 my-6">3</div>
            </div>

            <div className="border-2 bg-orange-100 border-black rounded-md m-2 p-4 mr-8" >
              <div className="text-2xl text-center text-blue-800 font-semibold px-4">Checker</div>
              <div className="text-2xl text-center text-blue-800 font-semibold px-4">Pending</div>
              <div className="text-2xl text-center text-orange-800 font-semibold px-4 my-6">3</div>
            </div>

            <div className="border-2 bg-green-100 border-black rounded-md m-2 p-4 mr-8" >
              <div className="text-2xl text-center text-blue-800 font-semibold px-4">Checker</div>
              <div className="text-2xl text-center text-blue-800 font-semibold px-4">Approved</div>
              <div className="text-2xl text-center text-green-800 font-semibold px-4 my-6">3</div>
            </div>

            <div className="border-2 bg-red-100 border-black rounded-md m-2 p-4" >
              <div className="text-2xl text-center text-blue-800 font-semibold px-4">Checker</div>
              <div className="text-2xl text-center text-blue-800 font-semibold px-4">Rejected</div>
              <div className="text-2xl text-center text-red-800 font-semibold px-4 my-6">3</div>
            </div>

          </div>

        </div>

        
      </div>
      </div>
      
    </div>
  );
};

export default Landing;
