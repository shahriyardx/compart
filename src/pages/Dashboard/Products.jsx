import React from "react";
import DashPage from "../../components/Layout/DashPage";

const Products = () => {
  return (
    <DashPage>
      <h1 className="text-2xl">All Products : 9</h1>

      <div className="w-full mt-2 overflow-x-auto">
        <table class="table-auto text-left w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-3 text-sm font-semibold text-left">Sl.</th>
              <th className="p-3 text-sm font-semibold text-left">Name</th>
              <th className="p-3 text-sm font-semibold text-left">Quantity</th>
              <th className="p-3 text-sm font-semibold text-left">Price</th>
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

              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <button className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashPage>
  );
};

export default Products;
