import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const items = ["item1", "item2", "item3", "item4", "item5"];

  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
  ];

  return (
    <>
      <div>
        <h2 className="type1">link tag</h2>
        <h2 className="type2">import tag</h2>
        <h4>By map</h4>
        <ul>
          {items.map((item) => {
            // map() works wonderfully in React as it returns a new array! forEach() returns undefined.
            return <li>{item}</li>;
          })}

          {items.map((item) => (
            <li>from simple way {item}</li>
          ))}
        </ul>

        <ul>
          {products.map((product) => (
            <li
              style={{
                "list-style-type": "none",
                marginBottom: "2em",
                borderBottom: "2px solid black",
              }}
            >
              {product.title}
              <img
                src={product.image}
                style={{ width: "100px", display: "block" }}
              />
            </li>
          ))}
        </ul>




      </div>
    </>
  );
}

export default App;
