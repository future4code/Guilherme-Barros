import React from "react";
import {
  ProductImage,
  CardContainer,
  PriceContainer,
  PriceText,
  NameText
} from "./styled";

const ProductCard = (props) => {
  return (
    <CardContainer>
      <ProductImage alt={props.name} src={props.image} />
      <NameText>{props.name}</NameText>
      <PriceContainer>
        <PriceText>R${props.price}</PriceText>
        <button onClick={props.addItemToCart}>Comprar</button>
      </PriceContainer>
    </CardContainer>
  );
};

export default ProductCard;
