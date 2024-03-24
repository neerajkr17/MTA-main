import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Search } from "lucide-react";
// import Maker from "./Maker";
// import Checker from "./Checker";
// import Verifier from "./Verifier";

function Dashboard() {
  return (
    <>
      <div>
        <Navbar />
        <div className="Dashboard-container flex">
          <Sidebar />

          <div className="update-page">
            

            <div className="flex justify-between ">
              <div className="ml-16">
                <label htmlFor="activity">Activity ID :</label>
                <input
                  type="text"
                  id="activity"
                  className="rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button>
                  <Search />
                </button>
              </div>

              <div>
                <span>
                  <label htmlFor="activity">Form Date : </label>
                  <input
                    type="date"
                    id="activity"
                    className="rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </span>

                <span className="ml-4">
                  <label htmlFor="activity">To Date : </label>
                  <input
                    type="date"
                    id="activity"
                    className="rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </span>

                <button className="bg-sky-400 rounded-lg py-1.5 px-4 ml-2">
                  Submit
                </button>
              </div>
            </div>

           
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
