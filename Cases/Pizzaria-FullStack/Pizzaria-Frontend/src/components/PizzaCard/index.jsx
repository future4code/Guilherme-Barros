import React from 'react'
import { CardPizzaImg} from './style'
import { Text, Box } from '@chakra-ui/react'
import { goToPizzaDetails } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
export const PizzaCard = ({id,img_url,name,price,ingredients}) => {
  const navigate = useNavigate()
  return (
    <Box
    boxShadow="rgb(0 0 0 / 30%) 0px 4px 8px 0px"
    rounded={"md"}
    p={"1em"}
    w={["16em"]}
    h={"auto"}
    fontFamily={"Flexo-Demi"}
    _hover={{ transform: `translate(0px, -5px)` }}
    cursor={"pointer"}
    >
     <CardPizzaImg src={img_url} onClick={()=>goToPizzaDetails(navigate,id)}/>
     <Text>{name}</Text>
     <Text>{price}</Text>
     <Text>{ingredients}</Text>
      </Box>
  )
}
