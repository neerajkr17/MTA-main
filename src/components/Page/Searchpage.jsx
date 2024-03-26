import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Searchpage = () => {
  // const [searchType, setSearchType] = useState("accountNumber");
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleSearchTypeChange = (e) => {
  //   setSearchType(e.target.value);
  // };

  // const handleSearchTermChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const handleSearch = () => {
  //   // Perform search logic here
  //   console.log(`Search type: ${searchType}, Search term: ${searchTerm}`);
  // };

  const navigate = useNavigate();

    function handleUpdatepage() {
        navigate('/merchant-update');
    }

    function handleChangehistorypage() {
      navigate('/merchant-update-change-history');
    }


  const [searchType, setSearchType] = useState('accountNumber');
  const [searchTerm, setSearchTerm] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [searchResults, setSearchResults] = useState([
    {
      sno: '01',
      accountNumber: '2018582416',
      customerName: 'Anil Solanki',
      changeHistory: 'Click Here',
    },
  ]);

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Perform search logic here
    // For demonstration purposes, we'll show the table
    setShowTable(true);
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />

        {/* <div className="bg-white p-4 rounded-lg shadow-md mt-4 ml-6">

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

        </div> */}

<div className="bg-white p-10 m-5 rounded-lg shadow-md w-4/6">

      <div className="mb-4 flex flex-col items-start">

        <div className="mr-4">
          <span className="font-semibold">Search Type:</span>


          <div className="mt-2 flex">
            <label className="mr-4">
              <input
                type="radio"
                value="accountNumber"
                checked={searchType === 'accountNumber'}
                onChange={handleSearchTypeChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Account Number</span>
            </label>
            <label className="mr-4">
              <input
                type="radio"
                value="mobileNumber"
                checked={searchType === 'mobileNumber'}
                onChange={handleSearchTypeChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Mobile Number</span>
            </label>
            <label>
              <input
                type="radio"
                value="customerNumber"
                checked={searchType === 'customerNumber'}
                onChange={handleSearchTypeChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Customer Number</span>
            </label>
          </div>
        </div>

        <div className="flex-grow mt-10 mb-10">
          <span className="font-semibold">Search For:</span>
          <input
            type="text"
            placeholder="Search For..."
            value={searchTerm}
            onChange={handleSearchTermChange}
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 mx-8"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>

      </div>



      {showTable && (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-blue-900 text-white font-semibold">
                <th className="px-4 py-2">S.No.</th>
                <th className="px-4 py-2">Account Number</th>
                <th className="px-4 py-2">Customer Name</th>
                <th className="px-4 py-2">Change History</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((result, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="border px-4 py-2">{result.sno}</td>
                  <td className="border px-4 py-2 text-blue-600 underline" onClick={handleUpdatepage}>{result.accountNumber}</td>
                  <td className="border px-4 py-2">{result.customerName}</td>
                  <td className="border px-4 py-2 text-blue-600 underline" onClick={handleChangehistorypage}>{result.changeHistory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>


      </div>
    </div>
  );
};

export default Searchpage;
