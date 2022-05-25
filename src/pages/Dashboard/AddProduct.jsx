import React from "react";
import { useForm } from "react-hook-form";
import DashPage from "../../components/Layout/DashPage";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <DashPage>
      <div className="py-10">
        <h1 className="text-2xl font-semibold mb-10">Add Product</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col">
              <label className="font-bold text-lg">Name</label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                })}
              />
              <p className="text-red-400">
                {errors.name?.type === "required" && "Name is required"}
              </p>
            </div>

            <div className="flex flex-col">
              <label className="font-bold text-lg">Short Description</label>
              <input
                type="text"
                placeholder="Short Description"
                {...register("short_description", {
                  required: true,
                })}
              />
              <p className="text-red-400">
                {errors.short_description?.type === "required" &&
                  "Short description is required"}
              </p>
            </div>
          </div>

          <div className="mt-3 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col">
              <label className="font-bold text-lg">Unit Price</label>
              <input
                type="number"
                placeholder="Unit Price"
                {...register("price", {
                  required: true,
                  min: 1,
                })}
              />
              <p className="text-red-400">
                {errors.price?.type === "required" && "Price is required"}
                {errors.price?.type === "min" && "Price must be 1 or more"}
              </p>
            </div>

            <div className="flex flex-col">
              <label className="font-bold text-lg">Min Order</label>
              <input
                type="number"
                placeholder="Min order"
                {...register("min_order", {
                  required: true,
                  min: 1,
                })}
              />
              <p className="text-red-400">
                {errors.min_order?.type === "required" &&
                  "Min order is required"}
                {errors.min_order?.type === "min" &&
                  "Min order must be 1 or more"}
              </p>
            </div>

            <div className="flex flex-col sm:col-span-2 md:col-span-1">
              <label className="font-bold text-lg">Quantity</label>
              <input
                type="number"
                placeholder="Quantity"
                {...register("quantity", {
                  required: true,
                  min: 1,
                })}
              />
              <p className="text-red-400">
                {errors.quantity?.type === "required" && "Quantity is required"}
                {errors.quantity?.type === "min" &&
                  "Quantity must be 1 or more"}
              </p>
            </div>
          </div>

          <div className="mt-3">
            <label className="font-bold text-lg">Description</label>
            <textarea
              rows="10"
              className="w-full"
              {...register("description", { required: true })}
            ></textarea>
            <p className="text-red-400">
              {errors.description?.type === "required" &&
                "Description is required"}
            </p>
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="px-5 py-3 bg-black text-white font-semibold"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </DashPage>
  );
};

export default AddProduct;