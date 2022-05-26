import React from "react";
import { useQuery } from "react-query";
import Container from "../../components/Layout/Container";
import Part from "../../components/Part/Part";
import { API_BASE } from "../../pages/config";

const Parts = () => {
  const {
    data: parts,
    isLoading,
    error,
    refetch,
  } = useQuery("products", () =>
    fetch(`${API_BASE}/products`).then((data) => data.json())
  );

  return (
    <div className="border-0 border-t-2">
      <Container className="py-20">
        <h1 className="text-3xl text-center font-bold">Tools 💻 Parts</h1>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {parts?.slice(0, 3)?.map((part, index) => {
            return (
              <Part
                part={part}
                key={index}
                className={
                  index == 2
                    ? `
                      sm:last:grid sm:last:grid-cols-2 sm:last:col-span-2 sm:last:gap-5 
                      md:last:grid md:last:grid-cols-1 md:last:col-span-1 md:last:gap-0
                    `
                    : ""
                }
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Parts;
