import React, { useContext, useState } from 'react'
import { api } from '../../constants';
import { GlobalContext } from '../../GlobalContext';
import useForm from '../../hooks/useForm';

export const Header = () => {
  const {form, onChange, cleanFields }=useForm({
    name:""
  })
  const { searchUser, setSearchUser,setUser,history,setHistory } = useContext(GlobalContext)

  

  const getUser=(e)=>{
e.preventDefault()
    api.get(`/${form.name}`)
    .then(({data})=>{
      setUser(data)
     setHistory(data.login)

     let historic=localStorage.getItem("searchs")
     console.log(historic);
     if(historic!=null && historic != []){
      setHistory([...history,historic])

      localStorage.setItem("searchs",JSON.stringify(history)) 
     }else{ localStorage.setItem("searchs",JSON.stringify(history)) }
    
    })
    .catch((error)=>console.log(error))
   cleanFields()
  }

  return (
    <div>
      <form method='GET' onSubmit={getUser}>
      <input
      placeholder='Pesquise um usuário...'
      type={'search'}
       name="name"
       value={form.name}
       onChange={onChange}>
      </input>
      <input
      type={'submit'} 
      
      ></input>
      </form>
      </div>
  )
}
