import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function Update() {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Search Result for: 2018352416</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="mb-2">
            <span className="font-semibold">Customer Name:</span>{' '}
            <span>Anil Solanki</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Address:</span> <span>1st Cross</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">GSTN:</span>{' '}
            <span>ANCD73245678</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Branch Code:</span>{' '}
            <span>7902124</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Permanent Hold:</span>{' '}
            <span className="text-purple-600">0.0</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Customer Status:</span>{' '}
            <select className="border border-gray-300 rounded px-2 py-1">
              <option>Active</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div>
          <div className="mb-2">
            <span className="font-semibold">Account Number:</span>{' '}
            <span>1234567890</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">PAN Number:</span>{' '}
            <span>BJAP3234S</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Phone Number:</span>{' '}
            <span>7894561234</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">CIF Number:</span>{' '}
            <span>1234567890AB</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Account Restriction:</span>{' '}
            <select className="border border-gray-300 rounded px-2 py-1">
              <option>None</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Edit
      </button>
    </div>
        </div>
      </div>
    </>
  );
}

export default Update;
