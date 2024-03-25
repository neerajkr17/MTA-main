import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Searchpage = () => {
  const [searchType, setSearchType] = useState("accountNumber");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Perform search logic here
    console.log(`Search type: ${searchType}, Search term: ${searchTerm}`);
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="bg-white p-4 rounded-lg shadow-md mt-4 ml-6">

          <div className="flex items-center mb-4">
            <span className="mr-4 font-semibold">Search Type:</span>

            <div className="flex items-center">
              <label className="mr-2 ml-10">
                <input
                  type="radio"
                  value="accountNumber"
                  checked={searchType === "accountNumber"}
                  onChange={handleSearchTypeChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Account Number</span>
              </label>
              <label className="mr-2 ml-6">
                <input
                  type="radio"
                  value="mobileNumber"
                  checked={searchType === "mobileNumber"}
                  onChange={handleSearchTypeChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Mobile Number</span>
              </label>
              <label className="ml-6">
                <input
                  type="radio"
                  value="customerId"
                  checked={searchType === "customerId"}
                  onChange={handleSearchTypeChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Customer ID</span>
              </label>
            </div>
          </div>

          <div className="flex items-center">
          <span className="mr-4 font-semibold">Search For:</span>

            <input
              type="text"
              placeholder="Search For..."
              value={searchTerm}
              onChange={handleSearchTermChange}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Searchpage;
