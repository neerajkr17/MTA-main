// import React from "react";
// import { NavLink } from "react-router-dom";

// function Sidebar() {
//   return (
//     <div className="Side h-[calc(100vh-100px)]   flex flex-col bg-indigo-400 w-72">

//       <NavLink to="/merchant-opening">
//         <button className="py-2.5 px-8 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Merchant A/c Opening</button>
//       </NavLink>

//       <NavLink to="/merchant-update">
//         <button>Merchant Update</button>
//       </NavLink>

//       <NavLink to="/merchant-dashboard">
//         <button>Maker Checker Dashboard</button>
//       </NavLink>
      
//       <NavLink to="/merchant-activitypage">
//         <button>Maker Cheaker Activity</button>
//       </NavLink>
//     </div>
//   );
// }

// export default Sidebar;


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { TiHome } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";
import { TbFileReport } from "react-icons/tb";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`sidebar ${isOpen ? 'px-86' : ''}`}>
      <div className="inner bg-purple-700 text-white w-56 h-full flex flex-col">
        <header className="flex items-center justify-between p-4">
          <button
            type="button"
            className="sidebar-burger text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="icon">
              {isOpen ? <RxHamburgerMenu /> : <RxCross1 />}
            </span>
          </button>

        </header>

        <nav className="flex-1">

          
          <button>{isOpen ? <TiHome /> : 'Merchant Account'}</button>


<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>


<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mechant Addition</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Merchant Update</a>
      </li>
    </ul>
</div>


          <button>
            {isOpen ? <FaUsers /> : 'Merchant Maker Checker'}
          </button>

          <NavLink
            to="/merchant-reports"
            className="block py-2 px-4 hover:bg-purple-800 focus:bg-purple-800"
          >
            {isOpen ? <TbFileReport /> : 'Merchant Reports' }
          </NavLink>

        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

