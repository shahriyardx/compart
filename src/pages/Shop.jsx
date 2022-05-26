import React from "react";
import { useQuery } from "react-query";
import Container from "../components/Layout/Container";
import Page from "../components/Layout/Page";
import Part from "../components/Part/Part";
import { API_BASE } from "./config";

const Shop = () => {
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useQuery("products", () =>
    fetch(`${API_BASE}/products`).then((data) => data.json())
  );
  return (
    <Page>
      <Container className="pt-10 pb-20">
        <h1 className="page_heading">Shop</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {products?.map((part, index) => {
            return <Part key={index} part={part} />;
          })}
        </div>
      </Container>
    </Page>
  );
};

export default Shop;
