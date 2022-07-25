import { Box, Button, Center, Flex,Image,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { ItemCard } from '../../components/ItemCard'
import { api } from '../../constants'
import { Background } from './style'
import EmptyCart from './../../assets/emptyCart.png'
export const Cart = () => {
  const [itens,setItens]=useState([])
 
  const cartItens=()=>{
    api.get('/item/cart',{headers: { 'Authorization': localStorage.getItem('token') }})
    .then(({data})=>{
      setItens(data)
      
      console.log(data);
    }).catch((error)=>console.log(error.message))
  }
  useEffect(()=>{
    cartItens()
    },[itens])
  return (
    <Background>
	<Header/>

  <Box
  display={"flex"}
    justifyContent={["center"]}
    flexFlow={"column"}
    alignItems={["center"]}
    w={"full"}
    gap={5}
  >
<Box
 boxShadow="rgb(0 0 0 / 30%) 0px 4px 8px 0px"
 rounded={"md"}
 p={"3em"}
 m={'2em'}
 w={["80em"]}
 h={"40em"}
 fontFamily={"Flexo-Demi"}
 bg='white'
>
 
    <Box>
    {
    itens.length == 0 ? <Center> <Image 
    w={'30em'}
    src={EmptyCart}/>
    </Center> :
    itens?.map((item)=>{
  return(
  <ItemCard key={item.id} img_url={item.img_url} id={item.id} 
    ingredients={item.ingredients} price={item.price} 
    name={item.name} quantity={item.quantity}
    orderId={item.order_id}/>
   )
})} 
</Box>

  </Box>

 <Box>

 </Box>
 
  </Box>

	</Background>
  )
}
