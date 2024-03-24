import React from 'react';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';

const Commission = () => {
  const data = [
    {
      date: '000017',
      cifNumber: 'N/A',
      accountNo: 'Aman Kumar',
      userClass: '123456789001',
      transactionType: 'Rejected',
      grossCommission: 1,
      tdsDeducted: '20-09-2022',
      netCommission: 1,
    },
  ];
  return (
    <div>
      <Navbar/>
      <div className="flex">
        <Sidebar />

        <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold mb-4">Commission Report</h1>
      <div className='bg-black h-1'></div>
      <div className="overflow-x-auto mt-16" >
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">CIF Number</th>
              <th className="px-4 py-2">Account No</th>
              <th className="px-4 py-2">User Class</th>
              <th className="px-4 py-2">Transaction Type</th>
              <th className="px-4 py-2">Gross Commission</th>
              <th className="px-4 py-2">TDS Deducted</th>
              <th className="px-4 py-2">Net Commission</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="border px-4 py-2">{item.date}</td>
                <td className="border px-4 py-2">{item.cifNumber}</td>
                <td className="border px-4 py-2">{item.accountNo}</td>
                <td className="border px-4 py-2">{item.userClass}</td>
                <td className="border px-4 py-2">{item.transactionType}</td>
                <td className="border px-4 py-2">{item.grossCommission}</td>
                <td className="border px-4 py-2">{item.tdsDeducted}</td>
                <td className="border px-4 py-2">{item.netCommission}</td>
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

export default Commission