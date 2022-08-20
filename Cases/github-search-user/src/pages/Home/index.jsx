import React, { useContext } from 'react'
import { Header } from '../../components/Header'
import { GlobalContext } from '../../GlobalContext'

export const Home = () => {

  const {
    user
  } = useContext(GlobalContext);
  console.log(user);



  return (
    <div>
      <Header/>
      {user}
      
      </div>
  )
}
