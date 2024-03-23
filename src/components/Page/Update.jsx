import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function Update() {
  return (
    <>
      <div>
        <Navbar />
        <div className="update-container flex">
          <Sidebar />
          <div className="update-page">
            <h3 className="p-8 ml-10 text-xl font-bold">Type of Search : </h3>

            <div className="radio-btn p-8 ml-96">
              <div className="flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-lg font-medium text-gray-900 "
                >
                  Account Number
                </label>
              </div>

              <div class="flex items-center mb-4">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ms-2 text-lg font-medium text-gray-900"
                >
                  Mobile Number
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  checked
                  id="default-radio-3"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-2"
                  class="ms-2 text-lg font-medium text-gray-900 "
                >
                  Customer Number
                </label>
              </div>
            </div>

            <div className="content flex p-20">
              <label
                className="w-[22ch] text-lg font-medium"
                htmlFor="customerName"
              >
                Search For :{" "}
              </label>
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="customerName"
              />
              <button className="ml-10 text-black bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-xl text-lg">
                Search
              </button>
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-4 m-4">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-10 py-4">
                      Account No.
                    </th>
                    <th scope="col" class="px-10 py-4">
                      Customer Name.
                    </th>

                    <th scope="col" class="px-10 py-4">
                      Change History
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      1234567890
                    </th>
                    <td class="px-10 py-4">Aman Kumar</td>

                    <td class="px-10 py-4">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Update;
