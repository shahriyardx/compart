import React, { useEffect, useState } from "react";
import Container from "../../components/Layout/Container";
import Review from "../../components/Review/Review";
import { API_BASE } from "../../pages/config";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/review`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);
  return (
    <div className="border-0 border-t-2">
      <Container className="py-20">
        <h1 className="text-3xl text-center font-bold">Latest 🌟 Reviews</h1>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {reviews?.slice(0, 3).map((review, index) => {
            return <Review key={index} data={review} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
