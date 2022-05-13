import React, { useEffect, useState, useContext } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import { ScreenContainer } from "./styled";
import { useHistory } from "react-router-dom";
import { goToProducts } from "../../routes/coordinator";
import GlobalStateContext from "../../global/GlobalStateContext";

const CartScreen = () => {
  const { states, setters } = useContext(GlobalStateContext);
  const history = useHistory();

  const removeItem = (itemToRemove) => {
    const position = states.cart.findIndex(
      (item) => item.id === itemToRemove.id
    );

    let newCart = [...states.cart];
    if (newCart[position].amount === 1) {
      newCart.splice(position, 1);
    } else {
      newCart[position].amount -= 1;
    }
    setters.setCart(newCart);
    setters.updateCartPrice();
  };

  const cartList =
    states.cart &&
    states.cart.map((item) => {
      return (
        <ProductItem
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.photos[0]}
          removeItem={() => removeItem(item)}
          amount={item.amount}
        />
      );
    });

  const makePurchase = () => {
    const email = window.prompt("Qual é seu email?");

    const isEmailCorrect = window.confirm(
      `O email digitado é: ${email}\n O preço total é de R$${states.cartPrice}.\n Confirma essas informações?`
    );

    if (isEmailCorrect) {
      window.alert("Você receberá um email com as informações para pagamento.");
      goToProducts(history);
    } else {
      window.alert("Digite novamente.");
    }
  };

  return (
    <>
      <ScreenContainer>
        {states.cart.length > 0 ? cartList : <p>Carrinho Vazio</p>}
        <h1>Total: R$ {states.cartPrice}</h1>
        <button onClick={() => goToProducts(history)}>
          Continuar Comprando
        </button>
        <button onClick={makePurchase}>Finalizar compra</button>
      </ScreenContainer>
    </>
  );
};

export default CartScreen;
