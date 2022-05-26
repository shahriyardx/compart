import React from "react";
import Container from "../../components/Layout/Container";

const Sponsors = () => {
  return (
    <div className="py-20 border-t-2">
      <Container>
        <h1 className="text-3xl text-center font-bold">Our 🤝 Sponsors </h1>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20">
          <div>
            <img src="/images/brands/ss.png" alt="" />
          </div>

          <div>
            <img src="/images/brands/razer.png" alt="" />
          </div>

          <div>
            <img src="/images/brands/arous.png" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sponsors;
