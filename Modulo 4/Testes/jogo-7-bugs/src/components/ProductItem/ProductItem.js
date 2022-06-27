import React from "react";
import { ItemContainer, ItemImage, TextContainer, NameText } from "./syled";

const ProductItem = ({ name, image, price, amount, removeItem }) => {
  return (
    <ItemContainer>
      <ItemImage alt={name} src={image} />
      <TextContainer>
        <NameText>{name}</NameText>
        <p>
          R${price} <b>x{amount}</b>
        </p>
      </TextContainer>
      <button onClick={removeItem}>Remover</button>
    </ItemContainer>
  );
};

export default ProductItem;
