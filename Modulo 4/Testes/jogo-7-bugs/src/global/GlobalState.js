import React, { useState } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { productsMock } from "../constants/products";

export const calculateCartPrice = (cart) =>
  cart.reduce((total, item) => (total += item.price), 0);

const GlobalState = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    minValue: -Infinity,
    maxValue: Infinity,
    name: ""
  });

  const [cartPrice, setCartPrice] = useState(0);

  const getProducts = () => {
    Promise.resolve(productsMock)
      .then((response) => setProducts(response))
      .catch((error) => alert(error.message));
  };

  const updateCartPrice = () => setCartPrice(calculateCartPrice(cart));

  const states = { products, cart, filters, cartPrice };
  const setters = { setProducts, setCart, setFilters, updateCartPrice };
  const requests = { getProducts };

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
