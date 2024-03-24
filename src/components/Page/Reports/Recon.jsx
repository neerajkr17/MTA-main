import React from 'react';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';

const Recon = () => {
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
    <Navbar/>
    <div className="flex">
      <Sidebar />

      <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold mb-4">Recon Report</h1>
      <div className='bg-black h-1'></div>
      <div className="overflow-x-auto mt-16">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Activity ID</th>
              <th className="px-4 py-2">Customer ID</th>
              <th className="px-4 py-2">Customer Name</th>
              <th className="px-4 py-2">Account No.</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Maker ID</th>
              <th className="px-4 py-2">Created On</th>
              <th className="px-4 py-2">Checker ID</th>
              <th className="px-4 py-2">Updated On</th>
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
  )
}

export default Recon