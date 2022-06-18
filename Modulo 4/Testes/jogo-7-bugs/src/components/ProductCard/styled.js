import styled from "styled-components";

export const CardContainer = styled.div`
  border: 2px solid black;
  width: 200px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 10px;
  width: 180px;
`;

export const PriceText = styled.h3`
  margin: 0;
`;

export const NameText = styled.h2`
  margin: 10px 0;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 250px;
`;
