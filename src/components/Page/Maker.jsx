import React from 'react'

const Maker = () => {
  return (
    <div className="bg-gray-300 p-4 m-4 w-full mx-16 h-[calc(100vh-300px)]">
            <h1 className="text-xl font-semibold ml-6 p-4">
              Number of Activities in Maker Queue - 3
            </h1>
            <div className="bg-black h-1 m-1"></div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                  <tr>
                    <th scope="col" class="px-7 py-3">
                      Activity ID
                    </th>
                    <th scope="col" class="px-7 py-3">
                      Customer ID
                    </th>
                    <th scope="col" class="px-7 py-3">
                      Customer Name
                    </th>
                    <th scope="col" class="px-7 py-3">
                      Account No.
                    </th>
                    <th scope="col" class="px-7 py-3">
                      Status
                    </th>
                    <th scope="col" class="px-7 py-3">
                      Maker ID
                    </th>
                    <th scope="col" class="px-7 py-3">
                      Created On
                    </th>
                    <th scope="col" class="px-7 py-3">
                      Checker ID
                    </th>
                    <th scope="col" class="px-7 py-3">
                      Updated ID
                    </th>
                    <th scope="col" class="px-7 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      00001
                    </th>
                    <td class="px-6 py-4">NA</td>
                    <td class="px-6 py-4">Aman Kumar</td>
                    <td class="px-6 py-4">1234567890</td>
                    <td class="px-6 py-4">Rejected</td>
                    <td class="px-6 py-4">1</td>
                    <td class="px-6 py-4">17/06/2022</td>
                    <td class="px-6 py-4">1</td>
                    <td class="px-6 py-4">19/06/2022</td>
                    <td class="px-6 py-4 text-right">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      00002
                    </th>
                    <td class="px-6 py-4">NA</td>
                    <td class="px-6 py-4">Akash Kumar</td>
                    <td class="px-6 py-4">1234098760</td>
                    <td class="px-6 py-4">Accepted</td>
                    <td class="px-6 py-4">1</td>
                    <td class="px-6 py-4">12/05/2023</td>
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">18/05/2023</td>
                    <td class="px-6 py-4 text-right">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      00003
                    </th>
                    <td class="px-6 py-4">NA</td>
                    <td class="px-6 py-4">Neeraj Kumar</td>
                    <td class="px-6 py-4">9963258741</td>
                    <td class="px-6 py-4">Accepted</td>
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">22/02/2024</td>
                    <td class="px-6 py-4">1</td>
                    <td class="px-6 py-4">28/02/2024</td>
                    <td class="px-6 py-4 text-right">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  )
}

export default Maker