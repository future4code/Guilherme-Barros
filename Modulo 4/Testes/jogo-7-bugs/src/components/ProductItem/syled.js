import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  border: 2px solid black;
  width: 400px;
  justify-content: space-between;
  margin: 10px;
`;

export const ItemImage = styled.img`
  height: 100px;
  width: 100px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameText = styled.h2`
  margin-top: 10px;
  margin-left: 10px;
`;
