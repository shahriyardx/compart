import React from "react";
import { useForm } from "react-hook-form";
import Container from "../components/Layout/Container";
import Page from "../components/Layout/Page";

const Purchase = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Page>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container className="py-20">
          <div className="grid grid-cols-3 gap-10">
            <div>
              <h1 className="text-2xl font-bold">Your order</h1>

              <div className="flex gap-3 mt-2 bg-zinc-200 p-3 rounded-md">
                <img
                  className="w-20 aspect-square object-cover rounded-md"
                  src="/images/demo/headphone.jpg"
                  alt=""
                />

                <div>
                  <h1 className="text-xl font-semibold mb-2">
                    Awesome headphone
                  </h1>

                  <div className="grid grid-cols-7 items-center gap-2">
                    <div className="flex flex-col col-span-3">
                      <input
                        className="col-span-3"
                        type="number"
                        placeholder="Quantity"
                        defaultValue={50}
                        step={1}
                        {...register("quantity", {
                          required: true,
                          min: 50,
                          max: 1000,
                        })}
                      />
                      <p className="text-xs text-red-500">
                        {errors.quantity?.type === "required" &&
                          "Quantity is required"}
                        {errors.quantity?.type === "min" &&
                          "Min order quantity is 50"}
                        {errors.quantity?.type === "max" &&
                          "Max order quantity is 1000"}
                      </p>
                    </div>

                    <span className="flex items-center justify-center">x</span>

                    <span className="text-xl font-bold">$100</span>
                  </div>
                </div>
              </div>
              <hr className="my-5" />

              <div className="flex justify-between">
                <span>Total</span>
                <span>$5000</span>
              </div>
            </div>

            <div className="col-span-2">
              <h1 className="text-2xl font-bold">Checkout</h1>

              <div className="flex flex-col gap-3 mt-3">
                <input
                  className="w-full disabled:bg-zinc-300 rounded-md"
                  type="text"
                  defaultValue="Hello World"
                  disabled
                />
                <input
                  className="w-full disabled:bg-zinc-300 rounded-md"
                  type="email"
                  defaultValue="mdshahriyaralam552@gmail.com"
                  disabled
                />

                <input
                  className="w-full disabled:bg-zinc-300 rounded-md"
                  type="text"
                  placeholder="Shipping Address"
                />

                <input
                  className="w-full disabled:bg-zinc-300 rounded-md"
                  type="text"
                  placeholder="Phone Number"
                />

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    {...register("agreed", { required: true })}
                    required
                  />

                  <p>
                    <span>I agree to</span>
                    <a href="#" className="text-blue-400">
                      Terms and Conditions
                    </a>
                  </p>
                </div>

                <div className="mt-3">
                  <button
                    type="submit"
                    className=" px-5 py-3 bg-black disabled:bg-zinc-500 disabled:cursor-not-allowed text-white font-semibold"
                    disabled={errors.quantity ? true : false}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </form>
    </Page>
  );
};

export default Purchase;
