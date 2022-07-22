import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { PizzaCard } from '../../components/PizzaCard'
import { api } from '../../constants'

export const Home = () => {
  const [pizzas,setPizzas]=useState([])
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
},[pizzas])
  return (
	
    <div>
	<Header/>
  <div>
	{pizzas.map((pizza)=>{
    return <PizzaCard id={pizza.id} img_url={pizza.img_url} ingredients={pizza.ingredients} name={pizza.name} price={pizza.price}/>
  })}
  </div>
  </div>
  )
}
