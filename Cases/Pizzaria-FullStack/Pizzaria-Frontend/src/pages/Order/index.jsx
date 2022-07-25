import { Box, Grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { OrderCard } from '../../components/Order'
import { api } from '../../constants'
export const Order = () => {
  const [orders,setOrder]=useState([])
  const getOrders=async()=>{
   try {
   const res=await api.get('/order/all',{headers: { 'Authorization': localStorage.getItem('token') }})
    const {data}=res
    setOrder(data)
   } catch (error) {
    console.log(error);
  }
  }
  useEffect(()=>{
    getOrders()
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
    {orders.map((order)=>{
      return(
        <OrderCard img_url={order.img_url} nameUser={order.nameUser} 
        name={order.name} id={order.id} createdAt={order.createdAt} 
        price={order.price} quantity={order.quantity} total={order.total}/>
      )
    })}
  </Grid>
    </Box>
  )
}
