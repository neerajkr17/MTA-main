import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Changehistory = () => {
  const customerName = 'Anil Solanki';
  const cifNumber = '100022949';
  const customerSince = '17/06/2023';
  const customerType = 'Personal';
  const customerCode = 'Regular Customer';

  // const customerHistory = [
  //   { date: '17/06/2023', description: 'Statement Group' },
  //   { date: '17/12/2022', description: 'BBU Code' },
  //   { date: '19/12/2022', description: 'Next E-Statement Date' },
  //   { date: '24/04/2021', description: 'ITR Submission declaration' },
  // ];

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="bg-white shadow-md rounded-lg p-6 w-10/12">

        <div className="flex justify-between mb-4">
        <div>
          <p className="text-gray-500">Customer Name: {customerName}</p>
          <p className="text-gray-500">CIF Number: {cifNumber}</p>
          <p className="text-gray-500">Customer Since: {customerSince}</p>
        </div>
        <div>
          <p className="text-gray-500">Customer Type : {customerType}</p>
          <p className="text-gray-500">Customer Code : {customerCode}</p>
        </div>
      </div>


          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Customer History</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">From Date:</span>
              <input
                type="date"
                className="px-2 py-1 border border-gray-300 rounded"
              />
              <span className="text-sm font-medium">To Date:</span>
              <input
                type="date"
                className="px-2 py-1 border border-gray-300 rounded"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Submit
              </button>
            </div>
          </div>


          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">17/06/2023</td>
                  <td className="border px-4 py-2">Statement Group</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">11/12/2022</td>
                  <td className="border px-4 py-2">New L-G Statement Date</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">18/12/2021</td>
                  <td className="border px-4 py-2">
                    ITS Submission acknowledged
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <div className="grid grid-cols-4 gap-4">
          <div className="font-semibold">Date</div>
          <div className="font-semibold col-span-3">Description</div>
          {customerHistory.map((entry, index) => (
            <React.Fragment key={index}>
              <div>{entry.date}</div>
              <div className="col-span-3">{entry.description}</div>
            </React.Fragment>
          ))}
        </div> */}


        </div>
      </div>
    </div>
  );
};

export default Changehistory;
