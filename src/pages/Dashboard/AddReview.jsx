import axios from "axios";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DashPage from "../../components/Layout/DashPage";
import { auth } from "../../firebase";
import useProfile from "../../hooks/useProfile";
import useSwal from "../../hooks/useSwal";
import { API_BASE } from "../config";

const AddReview = () => {
  const Swal = useSwal();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [profile, _] = useProfile();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const reviewData = {
      ...data,
      email: user.email,
      name: user.displayName || "Unknown",
    };
    await fetch(`${API_BASE}/review/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(reviewData),
    }).then((data) => data.json());

    Swal.fire({
      text: "Review Added",
      icon: "success",
    });

    reset();
  };

  useEffect(() => {
    if (profile && profile.role == "Admin") {
      navigate("/dashboard");
    }
  }, [profile, navigate]);
  return (
    <DashPage>
      <h1 className="mt-5 mb-3 text-3xl font-bold text-center">Add a review</h1>
      <div className="w-full max-w-[400px] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label className="text-xl font-bold">Stars</label>
              <input
                type="number"
                min={1}
                defaultValue={1}
                max={5}
                placeholder="Stars"
                {...register("stars", {
                  required: true,
                  min: 1,
                  max: 5,
                })}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xl font-bold">What do you think?</label>
              <textarea
                rows={10}
                placeholder="Your feedback"
                {...register("content", {
                  required: true,
                })}
              />
            </div>
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="px-5 py-3 text-lg bg-black text-white"
            >
              Add Review
            </button>
          </div>
        </form>
      </div>
    </DashPage>
  );
};

export default AddReview;
