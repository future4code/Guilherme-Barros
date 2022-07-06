import React, { useContext, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import CartButton from "../../components/CartButton/CartButton";
import Filters from "../../components/Filters/Filters";
import { ScreenContainer } from "./styled";
import GlobalStateContext from "../../global/GlobalStateContext";

const ProductsScreen = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);

  useEffect(() => {
    requests.getProducts();
  }, []);

  const addItemToCart = (newItem) => {
    const position = states.cart.findIndex((item) => item.id === newItem.id);
    let newCart = [...states.cart];
    if (position === -1) {
      newCart.push({ ...newItem, amount: 1 });
    } else {
      newCart[position].amount += 1;
    }
    setters.setCart(newCart);
    setters.updateCartPrice();
    alert(`${newItem.name} foi adicionado ao carrinho com sucesso!`);
  };

  const filteredProducts = states.products
    .filter((p) =>
      states.filters.minValue ? Number(p.price) > states.filters.minValue : true
    )
    .filter((p) =>
      states.filters.maxValue ? Number(p.price) < states.filters.maxValue : true
    )
    .filter((p) =>
      states.filters.name
        ? p.name.toLowerCase().includes(states.filters.name.toLowerCase())
        : true
    );

  const productsList =
    filteredProducts &&
    filteredProducts.map((item) => {
      return (
        <ProductCard
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.photos[0]}
          addItemToCart={() => addItemToCart(item)}
        />
      );
    });

  return (
    <>
      <Filters />
      <ScreenContainer>
        {productsList}
        <CartButton />
      </ScreenContainer>
    </>
  );
};

export default ProductsScreen;
