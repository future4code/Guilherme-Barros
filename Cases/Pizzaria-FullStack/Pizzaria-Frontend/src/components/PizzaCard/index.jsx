import React, { useState } from 'react'
import { CardPizzaImg} from './style'
import { Text, Box,Button, Flex, Center } from '@chakra-ui/react'
import { goToPizzaDetails } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { api } from '../../constants'

export const PizzaCard = ({id,img_url,name,price,ingredients}) => {
  const [quantidade,setQuantidade]=useState(0)
  const addToCart=(id)=>{
  
    api.post('/item/create',{"pizzaId":id,"quantity":Number(quantidade)},{headers: { 'Authorization': localStorage.getItem('token') }})
    .then(({data})=>{
      alert('Pizza adicionada ao carrinho');
    }).catch((error)=>console.log(error.message))
  }
  const addItem=()=>{
    setQuantidade(quantidade+1)
  }
  const subItem=()=>{
    setQuantidade(quantidade-1)
  }
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
     <Text
     fontSize='2xl'
     >{name}</Text>
     <Text>R$ {price}</Text>
     <Text color='tomato'>Descrição</Text>
     <Text>{ingredients}</Text>
     <Center>
     <Text
      fontSize='2xl'
     >{quantidade}</Text>
     </Center>
     
   <Flex
    justifyContent={["center"]}
    alignItems={["center"]}
    gap={7}
   >
   
<Button colorScheme={'green'} onClick={()=>addItem()}>+</Button>
<Button colorScheme={'red'} onClick={()=>subItem()}>-</Button>

</Flex>
<Center>
<Button color='white'
     bg='green.500'
     _hover={{bg:'green.600'}}
     mt='1em'
     onClick={()=>addToCart(id)}
     >Adicionar ao Carrinho</Button>
     </Center>
      </Box>
  )
}
