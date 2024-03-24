import React from "react";
// import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import user from "../Assets/landingUser.svg";
import image from "../Assets/image.png";
import pie from "../Assets/pie.png";



const Landing = () => {
  
  return (
    <div className="h-svh min-h-screen bg-gradient-to-bl from-blue-600 via-violet-600 to-red-400">
      <Navbar />
      <div className="open-container flex">
        <div>
          <Sidebar/>
        </div>
<div className="flex flex-col">
  
        <div className="flex">
          <div className="bg-gray-200 h-52">
            <span>Total Merchants</span>
            <img src={user} alt="user" />
            <span>100</span>
          </div>

          <div className="bg-gray-200 flex ">
            <div>
              <h1>Merchant Status</h1>
              <img className="h-40" src={image} alt="" />
            </div>
            <div className="flex">
              <span>
                <h1>Active Merchants</h1>
                <h1>90</h1>
              </span>
              <span>
                <h1>In Active Merchants</h1>
                <h1>10</h1>
              </span>
            </div>
            <img className="h-64" src={pie} alt="" />
          </div>

        </div>

        <div className="border-4">
          <h1>Merchant Maker Checker Status</h1>

          <div className="flex">
            <div className="border-2 border-black rounded-md">
              <div>Maker</div>
              <div>Request</div>
              <div>3</div>
            </div>

            <div className="border-2 border-black rounded-md" >
              <div>Checker</div>
              <div>Pending</div>
              <div>3</div>
            </div>

            <div className="border-2 border-black rounded-md" >
              <div>Checker</div>
              <div>Approved</div>
              <div>3</div>
            </div>

            <div className="border-2 border-black rounded-md" >
              <div>Checker</div>
              <div>Rejected</div>
              <div>3</div>
            </div>
          </div>

        </div>

        
      </div>
      </div>
      
    </div>
  );
};

export default Landing;
