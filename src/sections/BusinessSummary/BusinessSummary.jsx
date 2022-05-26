import React from "react";
import Container from "../../components/Layout/Container";
import Summary from "../../components/Summary/Summary";
import {
  AiFillDollarCircle,
  AiOutlineUser,
  AiOutlineNumber,
} from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

const BusinessSummary = () => {
  return (
    <div className="border-0 border-t-2">
      <Container className="py-20">
        <h1 className="text-3xl text-center font-bold">Numbers 🔢 Matters </h1>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <Summary
            icon={AiOutlineUser}
            count={500}
            title="Happy Clients"
            desc="Everyone purchase from us gets the best products"
          />
          <Summary
            icon={AiFillDollarCircle}
            count={1400}
            title="Proructs sold"
            desc="Our sell couts shows how successful we are"
          />
          <Summary
            icon={AiOutlineNumber}
            count={3}
            title="Years out"
            desc="We have been in this industry last 3 years"
          />
          <Summary
            icon={BiWorld}
            count={78}
            title="Countries Reached"
            desc="Our products are sold in more than 78 countries"
          />
        </div>
      </Container>
    </div>
  );
};

export default BusinessSummary;
