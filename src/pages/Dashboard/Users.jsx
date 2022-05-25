import React from "react";
import DashPage from "../../components/Layout/DashPage";

const Users = () => {
  return (
    <DashPage>
      <h1 className="text-2xl">All Users : 9</h1>

      <div className="w-full mt-2 overflow-x-auto">
        <table class="table-auto text-left w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-3 text-sm font-semibold text-left">Sl.</th>
              <th className="p-3 text-sm font-semibold text-left">Email</th>
              <th className="p-3 text-sm font-semibold text-left">Role</th>
              <th className="p-3 text-sm font-semibold text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-zinc-200">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">1</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Malcolm Lockyer
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Admin
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2">
                <button className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">
                  Delete
                </button>

                <button className="px-3 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg">
                  Make Admin
                </button>

                <button className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg">
                  Remove Admin
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashPage>
  );
};

export default Users;
