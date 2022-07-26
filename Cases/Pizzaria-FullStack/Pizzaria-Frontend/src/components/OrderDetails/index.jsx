import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToOrderDetails } from '../../routes/coordinator'
import { CardOrderImg } from './style'

export const OrderCardDetails = ({id,total,createdAt,name,img_url,price,quantity,pizza}) => {

	const navigate = useNavigate()
  return (
     <Box
    boxShadow="rgb(0 0 0 / 30%) 0px 4px 8px 0px"
    rounded={"md"}
    p={"1em"}
    w={["16em"]}
    h={"auto"}
    fontFamily={"Flexo-Demi"}
    >
 <CardOrderImg src={img_url} onClick={()=>goToOrderDetails(navigate,id)}/>
 <Text
     fontSize='2xl'
     >{pizza}</Text>
     <Text>R$ {price}</Text>
     
     <Text>Total: {total}</Text>
     <Text color='tomato'>Compra realizada em: {createdAt}</Text>
    <Text>Usuário: {name}</Text>
     <Text
      fontSize='1xl'
     > Quantidade: {quantity}</Text>
     
    </Box>
  )
}
