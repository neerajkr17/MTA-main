import React from "react";
// import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import user from "../Assets/landingUser.svg";



const Landing = () => {
  
  return (
    <div>
      <Navbar />
      <div className="open-container flex">
        <div>
          <Sidebar/>
        </div>

        <div >
          <div className="bg-gray-200">
            <span>Total Merchants</span>
            <img src={user} alt="user" />
            <span>100</span>
          </div>

          <div>
            <div></div>
            <div></div>
          </div>

        </div>

        <div>
          <h1>Merchant Maker Checker Status</h1>

          <div className="flex">
            <div>
              <div>Maker Request</div>
              <div>3</div>
            </div>

            <div>
              <div>Maker Request</div>
              <div>3</div>
            </div>

            <div>
              <div>Maker Request</div>
              <div>3</div>
            </div>

            <div>
              <div>Maker Request</div>
              <div>3</div>
            </div>
          </div>

        </div>

        
      </div>
      
    </div>
  );
};

export default Landing;
