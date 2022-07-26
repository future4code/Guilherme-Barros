import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { PizzaCard } from '../../components/PizzaCard'
import { api } from '../../constants'


export const PizzaDetails = () => {
  const [pizza,setPizza]=useState({})
 
  const param=useParams()
  const getPizzaDetails=()=>{
    api.get(`/pizza/${param.id}`,{headers: { 'Authorization': localStorage.getItem('token') }})
    .then(({data})=>{
      setPizza(data)
      console.log(data);
    }).catch((error)=>{
      console.log(error.message);
    })
  }
  useEffect(()=>{
    getPizzaDetails()
    },[])
  return (
    <div>
      <Header/>
    <PizzaCard img_url={pizza.img_url} ingredients={pizza.ingredients} name={pizza.name} price={pizza.price}/>
     </div>
  )
}
