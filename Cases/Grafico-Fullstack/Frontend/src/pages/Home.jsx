import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Text,Center,Flex, Spacer } from '@chakra-ui/react'
import { TableComponent } from '../components/Table'
import { api } from '../constants'
import { Graphic } from '../components/Graphic'
export const Home = () => {
  const [participants,setParticipants]=useState([])

  const getParticipants=()=>{
    api.get("/participant/all").then(({data})=>setParticipants(data))
    .catch((error)=>{console.log(error.message);})
  }
  useEffect(() => {
    getParticipants()
  
  }, [])
  return (
    <div>
      <Header getParticipant={getParticipants}/>
      <Center>
    <Flex direction='column' pt='3em'>
    <Center>
     <Text fontSize='3xl' fontWeight={'700'} color='#394B50'>DATA</Text>
     </Center>
     <Text pt='1em'>Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>

     </Flex>
     </Center>
     <Flex
      p='3em'
      justifyContent={'center'}
      gap={70}
     >
   
     <TableComponent data={participants}/>
    
     <Graphic data={participants} />
    
     </Flex>
  
     </div>

  )
}
