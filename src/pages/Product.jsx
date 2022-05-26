import React from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Layout/Container";
import Page from "../components/Layout/Page";
import useProduct from "../hooks/useProduct";

const Product = () => {
  const { productId } = useParams();
  const [product, loading] = useProduct(productId);

  return (
    <Page>
      <Container className="py-20">
        {product && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="shadow-lg rounded-lg">
                <img src={product.image} className="w-full" alt="headphone" />
              </div>

              <div>
                <h1 className="text-4xl font-bold">{product.name}</h1>
                <h2 className="text-3xl mt-2 mb-5">
                  <span className="underline underline-offset-2">
                    ${product.price}
                  </span>
                  <span className="text-base"> /product</span>
                </h2>

                <div className="py-5 text-lg">
                  <p>
                    &gt; Min Order :{" "}
                    <span className="font-bold">{product.min_order} pcs</span>
                  </p>
                  <p>
                    &gt; Available :{" "}
                    <span className="font-bold">{product.quantity} pcs</span>
                  </p>
                </div>
                <p className="text-xl block">{product.short_description}</p>

                <div className="mt-5">
                  <Link
                    to={`/purchase/${product._id}`}
                    className="px-5 py-3 bg-black text-white font-semibold"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-2xl font-bold">Description</h1>

              <div className="mt-2">
                <p>{product.description}</p>
              </div>
            </div>
          </>
        )}
      </Container>
    </Page>
  );
};

export default Product;
