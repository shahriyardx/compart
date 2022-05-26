import { useEffect, useState } from "react";
import { API_BASE } from "../pages/config";

const useProduct = (productId) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`${API_BASE}/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, []);

  return [product, loading];
};

export default useProduct;
