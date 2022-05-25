import React from "react";
import DashPage from "../../components/Layout/DashPage";

const Orders = () => {
  return (
    <DashPage>
      <h1 className="text-2xl">All Orders</h1>

      <div className="w-full mt-2 overflow-x-auto">
        <table class="table-auto text-left w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-3 text-sm font-semibold text-left">Sl.</th>
              <th className="p-3 text-sm font-semibold text-left">Name</th>
              <th className="p-3 text-sm font-semibold text-left">
                Payment Status
              </th>
              <th className="p-3 text-sm font-semibold text-left">
                Shipping Status
              </th>
              <th className="p-3 text-sm font-semibold text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-zinc-200">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">1</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Malcolm Lockyer
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                500
              </td>

              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                100
              </td>

              <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2">
                <button className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">
                  Cancel
                </button>

                <button className="px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg">
                  Mark as shipped
                </button>

                <button className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg">
                  Mark as delivered
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashPage>
  );
};

export default Orders;
