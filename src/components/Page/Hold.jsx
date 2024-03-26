// import React from 'react'

// const Hold = () => {
//   return (
//     <div>Hold</div>
//   )
// }

// export default Hold

import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Hold = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [holds, setHolds] = useState([]);

  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleSearch = () => {
    // Perform search logic here
    // For demonstration purposes, we'll assume no holds are found
    setHolds([]);
  };

  const handleAddHold = () => {
    // Logic to add a new hold
    console.log('Adding a new hold...');
  };

  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Account Number"
          value={accountNumber}
          onChange={handleAccountNumberChange}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
      <div className="flex bg-purple-700 text-white font-semibold mb-4">
        <div className="w-1/4 px-4 py-2">Action</div>
        <div className="w-1/4 px-4 py-2">Expiration Date</div>
        <div className="w-1/4 px-4 py-2">Hold Type</div>
        <div className="w-1/4 px-4 py-2">Amount</div>
      </div>
      {holds.length === 0 ? (
        <p className="text-gray-500">No holds found for this account.</p>
      ) : (
        holds.map((hold, index) => (
          <div key={index} className="flex border-b border-gray-300">
            {/* Render hold details here */}
          </div>
        ))
      )}
      <div className="mt-4">
        <button
          onClick={handleAddHold}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Hold;