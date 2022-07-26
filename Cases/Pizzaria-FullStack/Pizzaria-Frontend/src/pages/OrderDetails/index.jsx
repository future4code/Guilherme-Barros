import { Box, Grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'

import { OrderCardDetails } from '../../components/OrderDetails'
import { api } from '../../constants'

export const OrderDetails = () => {
  const [order,setOrder]=useState([])
  const param=useParams()
  const getDetails=()=>{
    api.get(`/order/details/${param.id}`,{headers: { 'Authorization': localStorage.getItem('token') }})
    .then(({data})=>{
      console.log(data);
setOrder(data)
    }).catch((error)=>console.log(error.message))
  }
  useEffect(()=>{
    getDetails()
    },[])
  return (
    <Box
    display={"flex"}
    justifyContent={["center"]}
    flexFlow={"column"}
    alignItems={["center"]}
    w={"full"}
    gap={5}>
      <Header/>
      <Grid
  p={[0, "1em"]}
  templateColumns={[
    "1fr",
    "repeat(2, 1fr)",
    "repeat(2, 1fr)",
    "repeat(3, 1fr)",
    "repeat(4, 1fr)",
  ]}
  gap={[10]}>
      {order.map((ord)=>{
        return (
          <OrderCardDetails img_url={ord.img_url}
          name={ord.name} id={ord.id} createdAt={ord.createdAt} 
          price={ord.price} quantity={ord.quantity} total={ord.total}
          pizza={ord.pizza}/>
        )
      })}
   
   </Grid>
     </Box>
  )
 
}
