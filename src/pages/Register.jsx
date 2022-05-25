import React from "react";
import { useForm } from "react-hook-form";
import Container from "../components/Layout/Container";
import Page from "../components/Layout/Page";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { BiLoaderAlt } from "react-icons/bi";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSignUp = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    reset();
  };

  return (
    <Page>
      <Container className="py-20 w-[400px] max-w-full">
        <h1 className="page_heading">Register</h1>

        <form onSubmit={handleSubmit(handleSignUp)}>
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

            <div className="mt-5">
              <button
                type="submit"
                className={`w-full bg-black py-3 rounded-md text-white text-lg font-semibold flex items-center gap-2 justify-center ${
                  loading && "cursor-not-allowed bg-zinc-700"
                }`}
                disabled={loading}
              >
                {loading && <BiLoaderAlt className="text-2xl animate-spin" />}
                <span>Register</span>
              </button>
            </div>
          </div>
        </form>

        <p className="text-red-400 text-sm mt-2">
          {error ? error.message : ""}
        </p>

        <div className="mt-3 flex flex-col">
          <Link to="/login" className="text-blue-500">
            🔥 Have an account?
          </Link>

          <Link to="/reset" className="text-blue-500">
            🤔 Forgot password?
          </Link>
        </div>
      </Container>
    </Page>
  );
};

export default Register;
