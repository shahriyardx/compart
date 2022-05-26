import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { API_BASE } from "../pages/config";
import useSwal from "../hooks/useSwal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CardComponent = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState();
  const [stripeError, setStripeError] = useState("");
  const [loading, setLoading] = useState(false);
  const Swal = useSwal();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE}/payment`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((data) => data.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setStripeError(error.message);
    } else {
      setStripeError("");
      setLoading(true);
      const { paymentIntent, error: intentError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: order.product_name,
              email: order.email,
            },
          },
        });

      if (intentError) {
        setStripeError(intentError.message);
        setLoading(false);
      } else {
        setStripeError("");
        fetch(`${API_BASE}/order/update`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            order_id: order._id,
            paid: true,
          }),
        })
          .then((data) => data.json())
          .then((data) => {
            Swal.fire({
              text: "Payment completed!",
              icon: "success",
            });
            setLoading(false);
            navigate("/dashboard/orders/my");
          });
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="mt-5">
        <button
          type="submit"
          disabled={!stripe || loading}
          className="rounded-md inline-block px-5 py-2 bg-black text-white font-semibold text-lg"
        >
          {loading ? "Please wait..." : "Pay now"}
        </button>
      </div>

      <p className="mt-2 text-red-500 text-sm">{stripeError}</p>
    </form>
  );
};

export default CardComponent;
