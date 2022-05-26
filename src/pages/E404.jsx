import React from "react";
import { Link } from "react-router-dom";
import Page from "../components/Layout/Page";

const E404 = () => {
  return (
    <Page>
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Not Found</h1>
          <img src="/images/404.png" className="max-w-[500px]" alt="" />

          <Link
            to="/"
            className="mt-5 inline-block px-5 py-3 bg-black text-white"
          >
            Back to home
          </Link>
        </div>
      </div>
    </Page>
  );
};

export default E404;
