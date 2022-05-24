import React from "react";
import Container from "../components/Layout/Container";
import Page from "../components/Layout/Page";
import Part from "../components/Part/Part";

const Shop = () => {
  return (
    <Page>
      <Container className="pt-10 pb-20">
        <h1 className="page_heading">Shop</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <Part />
          <Part />
          <Part />
          <Part />
          <Part />
          <Part />
          <Part />
          <Part />
          <Part />
          <Part />
        </div>
      </Container>
    </Page>
  );
};

export default Shop;
