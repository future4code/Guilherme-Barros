import React, { useContext } from 'react'
import { Header } from '../../components/Header'
import { User } from '../../components/User';
import { GlobalContext } from '../../GlobalContext'

export const Home = () => {

  const {
    user
  } = useContext(GlobalContext);
 

  // useEffect(() => {

  //   localStorage.setItem("searchs", JSON.stringify(cart))
  // }, [cart])

  return (
    <div>
      <Header/>
     <User name={user?.name} image={user?.avatar_url}/>
      
      </div>
  )
}
