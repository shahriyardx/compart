import React from "react";
import { useQuery } from "react-query";
import DashPage from "../../components/Layout/DashPage";
import { API_BASE } from "../config";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "sweetalert2/dist/sweetalert2.css";

const MySwal = withReactContent(Swal);

const Products = () => {
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useQuery("products", () =>
    fetch(`${API_BASE}/products`).then((data) => data.json())
  );

  const deleteProduct = async (productId) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        return fetch(`${API_BASE}/products/delete/${productId}`, {
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

    console.log(`Deleteting ${productId}`);
  };

  return (
    <DashPage>
      <h1 className="text-2xl">All Products : {products?.length}</h1>

      <div className="w-full mt-2 overflow-x-auto">
        <table className="table-auto text-left w-full">
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
            {products?.map((item, index) => {
              return (
                <tr key={index} className="even:bg-zinc-200">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.quantity}
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.price}
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <button
                      onClick={() => deleteProduct(item._id)}
                      className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                    >
                      Delete
                    </button>
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

export default Products;
