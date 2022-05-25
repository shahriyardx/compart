import React from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Layout/Container";
import Page from "../components/Layout/Page";
import Stars from "../components/Review/Stars";
import Review from "../components/Review/Review";

const Product = () => {
  const { productId } = useParams();

  return (
    <Page>
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="shadow-lg rounded-lg">
            <img
              src="/images/demo/headphone.jpg"
              className="w-full"
              alt="headphone"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold">Awesome headphones</h1>
            <Stars />
            <h2 className="text-3xl mt-2 mb-5">
              <span className="underline underline-offset-2">$100</span>
              <span className="text-base"> /product</span>
            </h2>

            <div className="py-5 text-lg">
              <p>
                &gt; Min Order : <span className="font-bold">100 pcs</span>
              </p>
              <p>
                &gt; Available : <span className="font-bold">10000 pcs</span>
              </p>
            </div>
            <p className="text-xl block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
              cumque laudantium deserunt facilis sunt adipisci. Odit fugiat
              adipisci animi minus, ipsa ea perspiciatis nam expedita dolore
              inventore iusto illo iste!
            </p>

            <div className="mt-5">
              <Link
                to="/purchase/something"
                className="px-5 py-3 bg-black text-white font-semibold"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-2xl font-bold">Reviews</h1>

          <div className="mt-2 grid grid-cols-1 gap-3">
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default Product;
