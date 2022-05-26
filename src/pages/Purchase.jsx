import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../components/Layout/Container";
import Page from "../components/Layout/Page";
import useProduct from "../hooks/useProduct";
import useProfile from "../hooks/useProfile";
import useSwal from "../hooks/useSwal";
import { API_BASE } from "./config";

const Purchase = () => {
  const navigate = useNavigate();
  const Swal = useSwal();
  const quantityRef = useRef();
  const { productId } = useParams();
  const [product, loading] = useProduct(productId);
  const [profile, profileLoading] = useProfile();
  const [total, setTotal] = useState(0);
  const [qError, setQError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (qError) return;

    const orderData = {
      ...data,
      quantity: parseInt(quantityRef.current.value),
      email: profile.email,
      product_name: product.name,
      product_id: product._id,
      due: total,
    };

    const responseData = await fetch(`${API_BASE}/order/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(orderData),
    }).then((data) => data.json());

    console.log(responseData);
    if (responseData.success) {
      Swal.fire({
        text: "Order placed",
        success: true,
      });

      navigate("/");
    }
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    if (quantity < product.min_order) {
      setQError(`Min order quantity is ${product.min_order}`);
    } else if (quantity > product.quantity) {
      setQError(`Max order quantity is ${product.quantity}`);
    } else if (!quantity) {
      setQError(`Quantity is required`);
    } else {
      setQError("");
    }
    setTotal(e.target.value * product.price);
  };
  useEffect(() => {
    if (!product) return;
    setTotal(product.min_order * product.price);
  }, [product]);

  return (
    <Page>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container className="py-20">
          {product && (
            <div className="grid grid-cols-3 gap-10">
              <div>
                <h1 className="text-2xl font-bold">Your order</h1>

                <div className="flex gap-3 mt-2 bg-zinc-200 p-3 rounded-md">
                  <img
                    className="w-20 aspect-square object-cover rounded-md"
                    src={product.image}
                    alt=""
                  />

                  <div>
                    <h1 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h1>

                    <div className="grid grid-cols-7 items-center gap-2">
                      <div className="flex flex-col col-span-3">
                        <input
                          ref={quantityRef}
                          className="col-span-3"
                          type="number"
                          placeholder="Quantity"
                          defaultValue={product.min_order}
                          step={1}
                          onChange={handleQuantityChange}
                        />
                        <p className="text-xs text-red-500">{qError}</p>
                      </div>

                      <span className="flex items-center justify-center">
                        x
                      </span>

                      <span className="text-xl font-bold">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>
                <hr className="my-5" />

                <div className="flex justify-between">
                  <span>Total</span>
                  <span>${total}</span>
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
                    defaultValue={profile?.location}
                    {...register("shipping_address", {
                      required: true,
                    })}
                  />

                  <input
                    className="w-full disabled:bg-zinc-300 rounded-md"
                    type="text"
                    placeholder="Phone Number"
                    defaultValue={profile?.phone}
                    {...register("phone", {
                      required: true,
                    })}
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
          )}
        </Container>
      </form>
    </Page>
  );
};

export default Purchase;
