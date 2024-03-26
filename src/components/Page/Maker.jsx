import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Search } from "lucide-react";

const Maker = () => {

  const data = [
    {
      activityID: '000017',
      customerID: 'N/A',
      customerName: 'Aman Kumar',
      accountNo: '123456789001',
      status: 'Rejected',
      makerID: 1,
      createdOn: '20-09-2022',
      checkerID: 1,
      updatedOn: '20-10-2022',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="table-container mt-4">

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

<div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold mb-4">Number of Activities in Maker Queue - 1</h1>
      <div className='bg-black h-1'></div>
      <div className="overflow-x-auto mt-16">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-[#dfd3e0]">Activity ID</th>
              <th className="px-4 py-2 bg-[#dfd3e0]">Customer ID</th>
              <th className="px-4 py-2 bg-[#dfd3e0]">Customer Name</th>
              <th className="px-4 py-2 bg-[#dfd3e0]">Account No.</th>
              <th className="px-4 py-2 bg-[#dfd3e0]">Status</th>
              <th className="px-4 py-2 bg-[#dfd3e0]">Maker ID</th>
              <th className="px-4 py-2 bg-[#dfd3e0]">Created On</th>
              <th className="px-4 py-2 bg-[#dfd3e0]">Checker ID</th>
              <th className="px-4 py-2 bg-[#dfd3e0]">Updated On</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="border px-4 py-2">{item.activityID}</td>
                <td className="border px-4 py-2">{item.customerID}</td>
                <td className="border px-4 py-2">{item.customerName}</td>
                <td className="border px-4 py-2">{item.accountNo}</td>
                <td className="border px-4 py-2">{item.status}</td>
                <td className="border px-4 py-2">{item.makerID}</td>
                <td className="border px-4 py-2">{item.createdOn}</td>
                <td className="border px-4 py-2">{item.checkerID}</td>
                <td className="border px-4 py-2">{item.updatedOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

        </div>
      </div>
    </div>
  );
}

export default Maker