import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import DashPage from "../../components/Layout/DashPage";
import { API_BASE } from "../config";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe } from "@stripe/react-stripe-js";
import CardComponent from "../../components/CardComponent";

const stripePk = loadStripe(
  "pk_test_51Ha6gqGa0Mti9075Awbe5njjYoEIvCGZk51XbGW3UMstr7CL3kBhMXIuZfGIW0pX1qszkoZYw9WwcCvBJP49VHb400SieRmYet"
);

const Payment = () => {
  const { orderId } = useParams();
  const { data } = useQuery("order", () =>
    fetch(`${API_BASE}/order/${orderId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((data) => data.json())
  );

  return (
    <DashPage>
      <h1 className="mt-5 mb-3 text-2xl">
        Paying for order id: <span className="font-bold">{orderId}</span>
        <div className="w-full max-w-[400px] p-4 shadow-lg border-2 mt-10">
          <Elements stripe={stripePk}>
            {data && <CardComponent order={data} />}
          </Elements>
        </div>
      </h1>
    </DashPage>
  );
};

export default Payment;
