import React from "react";
import { useForm } from "react-hook-form";
import Container from "../components/Layout/Container";
import Page from "../components/Layout/Page";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Page>
      <Container className="py-20 w-[400px] max-w-full">
        <h1 className="page_heading">Reset Password</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            {/* Email field */}
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                className="!border-zinc-400 rounded-md"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: EMAIL_REGEX,
                })}
              />
              <p className="text-red-500 text-sm">
                {errors.email?.type === "required" && "Email is required"}
                {errors.email?.type === "pattern" &&
                  "Please provide a valid email"}
              </p>
            </div>

            <div className="mt-5">
              <button
                type="submit"
                className="w-full bg-black py-3 rounded-md text-white text-lg font-semibold"
              >
                Reset
              </button>
            </div>
          </div>
        </form>

        <div className="mt-3 flex flex-col">
          <Link to="/login" className="text-blue-500">
            🔥 Have an account?
          </Link>

          <Link to="/register" className="text-blue-500">
            🙋‍♀️ New to compart?
          </Link>
        </div>
      </Container>
    </Page>
  );
};

export default ResetPassword;
