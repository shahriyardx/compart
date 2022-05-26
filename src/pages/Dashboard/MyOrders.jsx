import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import DashPage from "../../components/Layout/DashPage";
import useSwal from "../../hooks/useSwal";
import { API_BASE } from "../config";

const MyOrders = () => {
  const Swal = useSwal();
  const { data: orders, refetch } = useQuery("orders", () =>
    fetch(`${API_BASE}/order/my`).then((data) => data.json())
  );

  const deleteOrder = async (orderId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this order!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        return fetch(`${API_BASE}/order/delete/${orderId}`, {
          method: "DELETE",
        }).then((response) => response.json());
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "Order Deleted",
          icon: "success",
        });
        refetch();
      }
    });
  };

  return (
    <DashPage>
      <h1 className="text-2xl mt-5 mb-3">My Orders</h1>

      <div className="w-full mt-2 overflow-x-auto">
        <table className="table-auto text-left w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-3 text-sm font-semibold whitespace-nowrap text-left">
                Sl.
              </th>
              <th className="p-3 text-sm font-semibold whitespace-nowrap text-left">
                Name
              </th>
              <th className="p-3 text-sm font-semibold whitespace-nowrap text-left">
                Quantity
              </th>
              <th className="p-3 text-sm font-semibold whitespace-nowrap text-left">
                Total Price
              </th>
              <th className="p-3 text-sm font-semibold whitespace-nowrap text-left">
                Payment Status
              </th>
              <th className="p-3 text-sm font-semibold whitespace-nowrap text-left">
                Shipping Status
              </th>
              <th className="p-3 text-sm font-semibold whitespace-nowrap text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => {
              return (
                <tr key={order._id} className="even:bg-zinc-200">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {order.product_name}
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {order.quantity}
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    ${order.due}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <span
                      className={`p-2 text-sm rounded-lg ${
                        order.paid ? "bg-green-500/30" : "bg-red-500/30"
                      }`}
                    >
                      {order.paid ? "Paid" : "Unpaid"}
                    </span>
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {order.status}
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2">
                    {!order.paid && (
                      <>
                        <button
                          onClick={() => deleteOrder(order._id)}
                          className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                        >
                          Delete
                        </button>
                        {order.status !== "Cancelled" && (
                          <Link
                            to={`/dashboard/pay/${order._id}`}
                            onClick={() => {}}
                            className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                          >
                            Pay Now
                          </Link>
                        )}
                      </>
                    )}

                    {order.paid && (
                      <span className="font-bold text-red-500">
                        No Actions available
                      </span>
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

export default MyOrders;
