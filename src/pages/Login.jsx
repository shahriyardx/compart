import React from "react";
import { useForm } from "react-hook-form";
import Container from "../components/Layout/Container";
import Page from "../components/Layout/Page";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
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
      <Container className="py-20 max-w-[400px]">
        <h1 className="page_heading">Login</h1>

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
                })}
              />
              <p className="text-red-500 text-sm">
                {errors.email?.type === "required" && "Email is required"}
              </p>
            </div>

            {/* Password field */}
            <div className="flex flex-col">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                className="!border-zinc-400 rounded-md"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              <p className="text-red-500 text-sm">
                {errors.password?.type === "required" && "Password is required"}
                {errors.password?.type === "minLength" &&
                  "Password is must be 6 or more character long"}
              </p>
            </div>

            <div className="grid grid-cols-7 items-center gap-3 mt-5">
              <div className="col-span-3">
                <button
                  type="submit"
                  className="w-full bg-black py-3 rounded-md text-white text-lg font-semibold"
                >
                  Login
                </button>
              </div>
              <span className="text-center">Or</span>
              <div className="col-span-3">
                <button
                  type="button"
                  className="w-full py-3 rounded-md bg-blue-600 text-white text-lg font-semibold flex items-center justify-center gap-2"
                >
                  <div className="bg-white p-1 rounded-full">
                    <FcGoogle className="text-xl" />
                  </div>
                  Google
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="mt-3 flex flex-col">
          <Link to="/register" className="text-blue-500">
            🙋‍♀️ New to compart?
          </Link>

          <Link to="/register" className="text-blue-500">
            🤔 Forgot password?
          </Link>
        </div>
      </Container>
    </Page>
  );
};

export default Login;
