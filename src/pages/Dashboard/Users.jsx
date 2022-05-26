import React from "react";
import { useQuery } from "react-query";
import DashPage from "../../components/Layout/DashPage";
import { API_BASE } from "../config";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import useSwal from "../../hooks/useSwal";

const Users = () => {
  const Swal = useSwal();
  const [currentUser, loading] = useAuthState(auth);
  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery("users", () =>
    fetch(`${API_BASE}/user`).then((data) => data.json())
  );

  const deleteUser = async (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        return fetch(`${API_BASE}/user/delete/${userId}`, {
          method: "DELETE",
        }).then((response) => response.json());
      },
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          text: "Product Deleted",
        });
        refetch();
      }
    });
  };

  const toggleAdmin = async (email, currentRole) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Making a user admin will give him all the permissions!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        return fetch(`${API_BASE}/user/update/`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email,
            role: currentRole == "Customer" ? "Admin" : "Customer",
          }),
        }).then((response) => response.json());
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "Operating succeded",
        });
        refetch();
      }
    });
  };

  return (
    <DashPage>
      <h1 className="text-2xl mt-5 mb-3">All Users : {users?.length}</h1>

      <div className="w-full mt-2 overflow-x-auto">
        <table className="table-auto text-left w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-3 text-sm font-semibold text-left">Sl.</th>
              <th className="p-3 text-sm font-semibold text-left">Email</th>
              <th className="p-3 text-sm font-semibold text-left">Role</th>
              <th className="p-3 text-sm font-semibold text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => {
              return (
                <tr key={index} className="even:bg-zinc-200">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {user.role}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2">
                    {currentUser?.email !== user.email && (
                      <button
                        onClick={() => deleteUser()}
                        className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                      >
                        Delete
                      </button>
                    )}
                    {user.role !== "Admin" ? (
                      <button
                        onClick={() => toggleAdmin(user.email, user.role)}
                        className="px-3 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg"
                      >
                        Make Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => toggleAdmin(user.email, user.role)}
                        className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                      >
                        Remove Admin
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </DashPage>
  );
};

export default Users;
