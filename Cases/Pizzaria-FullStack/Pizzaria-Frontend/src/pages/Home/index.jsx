import { Box, Grid } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { PizzaCard } from '../../components/PizzaCard'
import { api } from '../../constants'
import { GlobalContext } from '../../GlobalContext'

export const Home = () => {
  const [pizzas,setPizzas]=useState([])
  const {
    searchPizza
  } = useContext(GlobalContext);
  const getPizzas=async()=>{
    try {
       const result=await api.get(`/pizza/all`,{headers: { 'Authorization': localStorage.getItem('token') }})
      const {data}=result
       setPizzas(data);
    } catch (error) {
      console.log(error);
    }
    
  }
useEffect(()=>{
getPizzas()
},[])
const filterPizza=
  pizzas?.filter((pizza)=>{
    return pizza.name.toLowerCase().includes(searchPizza.toLowerCase())
  })

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
	{filterPizza.map((pizza)=>{
    return <PizzaCard id={pizza.id} img_url={pizza.img_url} ingredients={pizza.ingredients} name={pizza.name} price={pizza.price}/>
  })}
  </Grid>
  </Box>
  )
}
