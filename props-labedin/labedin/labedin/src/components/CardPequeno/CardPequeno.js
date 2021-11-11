import React from 'react';
//import './CardPequeno.css'
import styled from 'styled-components'

const StrongLabel = styled.strong `
padding: 10px 5px 10px 7px;`

const LittleCard=styled.div `
display: flex;
	align-items: center;
	border: 1px solid black;
	padding: 5px 5px;
	margin-bottom: 10px;
	height: 70px;`

export default function CardPequeno(props) {
	return(
		<div>
			<LittleCard>
		<img src={ props.imagem } />
		
		    <StrongLabel>Email:</StrongLabel>
		    <label>{ props.mail }</label>
		    </LittleCard>
		    <LittleCard>
			<div>
		<img src={ props.imagem2 } />
		
		    <StrongLabel>Endereço:</StrongLabel>
		    <label>{ props.address }</label>
		    </div>
	    </LittleCard>
	    </div>
	    
	)
}
