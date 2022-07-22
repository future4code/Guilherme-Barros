import React from 'react';
import styled from 'styled-components';

export const PizzaDiv=styled.div`
	display: grid;
grid-template-rows: 3fr 1fr;
grid-template-columns: 1fr;
border-style: none;
border-radius:4px;
border-width: thin;
align-items: start;
justify-items: center;
box-shadow: rgb(163 163 163) 2px 2px 5px;
`
export const CardPizzaImg=styled.img`
width: 100%;
height: 200px;
`