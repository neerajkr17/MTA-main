import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Openingstatus from "./Openingstatus";

const Opening = () => {
  const [accountType, setAccountType] = useState("Current Account");
  const [panNumber, setPanNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cifNumber, setCifNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [gstin, setGstin] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const [showOpeningstatus, setShowOpeningstatus] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      customerName,
      accountNumber,
      accountType,
      panNumber,
      address,
      phone_number: phoneNumber,
      gstin,
      cifNumber,
    };

    // try {
    //   const response = await axios.post(
    //     "http://localhost:8081/mta/merchant/createAccount",
    //     data
    //   );

    //   // Handle success, redirect, or any other logic here
    //   console.log("Account created successfully!", response.data);
    // } catch (error) {
    //   console.error("Error creating account:", error.message);
    //   // Handle error, display a message to the user, or perform other error handling logic
    // }



    try {
      const response = await axios.post(
        "http://localhost:8081/mta/merchant/createAccount",
        data,
        // {
        //   headers: {
        //     "Access-Control-Allow-Origin": "http://localhost:5173",
        //     // Add any other headers you need here
        //   },
        // }
      );
    
      // Handle success, redirect, or any other logic here
      console.log("Account created successfully!", response.data);
    } catch (error) {
      console.error("Error creating account:", error.message);
      // Handle error, display a message to the user, or perform other error handling logic
    }
    setShowOpeningstatus(true)
  };

  return (
    <div>
      <Navbar />
      <div className="open-container flex">
        <div>
          <Sidebar />
        </div>

        <div className="Opening-page">
          {/* <div className="toparea flex m-4 p-8 space-x-20 ml-20">
            <div className=" flex">
              <label className="w-[25ch] mr-10" htmlFor="accountNumber">Account Number : </label>
              <input
                type="text"
                id="accountNumber"
                className=" block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>
            

            <div className="space-x-16">
              <label className="w-[22ch]" htmlFor="accountType">Account Type : </label>
              <select
                className="py-2 px-20"
                id="accountType"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="Current Account">Current Account</option>
                <option value="Savings">Savings</option>
              </select>
            </div>
          </div> */}

          <div className="midareapage-opening flex m-4 p-10 space-x-20 ml-20">

            <div className="left">

            <div className=" flex p-2">
              <label className="w-[25ch] mr-10" htmlFor="accountNumber">Account Number : </label>
              <input
                type="text"
                id="accountNumber"
                className=" block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>

              <div className="content flex p-2">
              
                <label className="w-[25ch] mr-10" htmlFor="customerName">Customer Name : </label>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>

              <div className="content flex p-2">
                
                <label className="w-[25ch] mr-10" htmlFor="address">Address : </label>
                <input
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              
              </div>

              <div className="content flex p-2">
                
                <label className="w-[25ch] mr-10" htmlFor="gstin">GSTIN : </label>
                
                
                <input
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  id="gstin"
                  value={gstin}
                  onChange={(e) => setGstin(e.target.value)}
                />
                
              </div>

              <div className="content flex p-2" >
                
                <label className="w-[25ch] mr-10" htmlFor="branch">Branch Code : </label>
                <input
                  type="text"
                  id="branch"
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            
              </div>

            </div>

            <div className="right">
            <div className="space-x-16 p-2">
              <label className="w-[22ch]" htmlFor="accountType">Account Type : </label>
              <select
                className="py-2 px-20"
                id="accountType"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="Current Account">Current Account</option>
                <option value="Savings">Saving Account</option>
              </select>
            </div>

              <div className="content flex p-2">
                <label className="w-[25ch] mr-10" htmlFor="panNumber">PAN Number : </label>
                <input
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  id="panNumber"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value)}
                />
              </div>
              <div className="content flex p-2">
                <label className="w-[25ch] mr-10" htmlFor="phoneNumber">Phone Number : </label>
                <input
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="content flex p-2">
                <label className="w-[25ch] mr-10" htmlFor="cifNumber">CIF Number : </label>
                <input
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  id="cifNumber"
                  value={cifNumber}
                  onChange={(e) => setCifNumber(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="m-4 p-8 space-x-80 ml-96">
            <button
              className="text-black bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-xl text-lg"
              // onClick={() => setShowOpeningstatus(true)}
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button className="text-black bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-xl text-lg">
              Cancel
            </button>
            
          </div>
        </div>
      </div>
      {showOpeningstatus && <Openingstatus onClose={()=> setShowOpeningstatus(false)}/>}
    </div>
  );
};

export default Opening;
