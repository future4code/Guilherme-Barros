import React, { useContext, useState } from 'react'
import { api } from '../../constants';
import { GlobalContext } from '../../GlobalContext';
import useForm from '../../hooks/useForm';

export const Header = () => {
  const {form, onChange, cleanFields }=useForm({
    name:""
  })
  const { searchUser, setSearchUser,setUser } = useContext(GlobalContext)

  

  const getUser=(e)=>{
e.preventDefault()
    api.get(`/user/${form.name}`,
    {headers: { 'Authorization': 'token' }})
    .then(({data})=>{
      setUser(data)
     
    })
    .catch((error)=>console.log(error))
   
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
