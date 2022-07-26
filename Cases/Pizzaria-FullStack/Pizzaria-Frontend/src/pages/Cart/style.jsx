import styled from 'styled-components'
import Fundo from './../../assets/background.jpg'
export const Background=styled.body`
	background-image:url(${Fundo})
`

export const Tabela=styled.table`

    width: 50%;
    border-collapse: collapse;
    margin: auto;
    min-width: 500px;
    margin-top: 50px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;

    th{
	padding: 5px;
    }
    td{
	padding:5px
    }
`