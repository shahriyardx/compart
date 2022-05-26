import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import DashPage from "../../components/Layout/DashPage";
import { API_BASE } from "../config";

const Orders = () => {
  const {
    data: orders,
    isLoading,
    error,
    refetch,
  } = useQuery("orders", () =>
    fetch(`${API_BASE}/order`).then((data) => data.json())
  );

  const updateStatus = async (currentStatus, order_id) => {
    const statusMap = {
      Created: "Shipped",
      Shipped: "Delivered",
      Cancelled: "Cancelled",
    };

    const newStatus = { order_id, status: statusMap[currentStatus] };
    const { data: updateData } = await axios.put(
      `${API_BASE}/order/update`,
      newStatus
    );

    alert(updateData.success);
  };

  return (
    <DashPage>
      <h1 className="text-2xl">All Orders</h1>

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
                    {order.status == "Created" && (
                      <>
                        <button
                          onClick={() => updateStatus("Cancelled", order._id)}
                          className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => updateStatus(order.status, order._id)}
                          className="px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
                        >
                          Mark as shipped
                        </button>
                      </>
                    )}

                    {order.status == "Shipped" && (
                      <button
                        onClick={() => updateStatus(order.status, order._id)}
                        className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                      >
                        Mark as delivered
                      </button>
                    )}

                    {["Delivered", "Cancelled"].includes(order.status) && (
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

export default Orders;
