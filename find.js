const products = [
  { name: "Google pixel", brand: "Google", price: 100 },
  { name: "Phone 5s", brand: "Apaple", price: 120 },
  { name: "Razer Blackwidow Lite", brand: "Google", price: 300 },
  { name: "Rk81", brand: "Rk", price: 320 },
  { name: "Gm801", brand: "Logitech", price: 600 },
];

const searchterm = "pixel";
const matchedProducts = products.find((product) =>
  product.name.toLowerCase().includes(searchterm.toLowerCase())
);

console.log(matchedProducts);
