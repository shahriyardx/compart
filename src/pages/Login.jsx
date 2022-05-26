import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Container from "../components/Layout/Container";
import Page from "../components/Layout/Page";
import { FcGoogle, FcSynchronize } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { BiLoaderAlt } from "react-icons/bi";
import axios from "axios";
import { API_BASE } from "./config";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const [signInWithGoogle, google_user, google_loading, google_error] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, email_user, email_loading, email_error] =
    useSignInWithEmailAndPassword(auth);
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleGoogleSignin = async () => {
    await signInWithGoogle();
  };

  const handleEmailSignIn = async ({ email, password }) => {
    await signInWithEmailAndPassword(email, password);
  };

  const getJwt = async (user) => {
    const { email } = user.user;
    const {
      data: { accessToken },
    } = await axios.post(`${API_BASE}/auth/login`, {
      email,
    });

    localStorage.setItem("accessToken", accessToken);
    navigate(from);
  };

  useEffect(() => {
    if (!google_user && !email_user) return;
    getJwt(google_user || email_user);
  }, [google_user, email_user]);

  return (
    <Page>
      <Container className="py-20 w-[400px] max-w-full">
        <h1 className="page_heading">Login</h1>

        <form onSubmit={handleSubmit(handleEmailSignIn)}>
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

            <div className="grid grid-cols-1 sm:grid-cols-7 items-center gap-3 mt-5">
              <div className="col-span-1 sm:col-span-3">
                <button
                  type="submit"
                  className={`w-full bg-black py-3 rounded-md text-white text-lg font-semibold flex items-center gap-2 justify-center ${
                    email_loading && "cursor-not-allowed bg-zinc-700"
                  }`}
                  disabled={google_loading || email_loading}
                >
                  {email_loading && (
                    <BiLoaderAlt className="text-2xl animate-spin" />
                  )}
                  <span>Login</span>
                </button>
              </div>
              <span className="text-center hidden sm:block">Or</span>
              <div className="col-span-1 sm:col-span-3">
                <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="w-full py-3 rounded-md bg-blue-600 text-white text-lg font-semibold flex items-center justify-center gap-2"
                >
                  <div className="bg-white p-1 rounded-full">
                    {google_loading ? (
                      <FcSynchronize className="text-xl animate-spin" />
                    ) : (
                      <FcGoogle className="text-xl" />
                    )}
                  </div>
                  Google
                </button>
              </div>
            </div>
          </div>
        </form>

        <p className="text-red-400 text-sm mt-2">
          {google_error
            ? google_error.message
            : email_error
            ? email_error.message
            : ""}
        </p>

        <div className="mt-3 flex flex-col">
          <Link to="/register" className="text-blue-500">
            🙋‍♀️ New to compart?
          </Link>

          <Link to="/reset" className="text-blue-500">
            🤔 Forgot password?
          </Link>
        </div>
      </Container>
    </Page>
  );
};

export default Login;
