import React from "react";
import { ButtonContainer } from "./styled";
import { goToCart } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const CartButton = () => {
  const history = useHistory();
  return (
    <ButtonContainer onClick={() => goToCart(history)}>
      <span role="img" aria-label="carrinho">
        🛒
      </span>
    </ButtonContainer>
  );
};

export default CartButton;
