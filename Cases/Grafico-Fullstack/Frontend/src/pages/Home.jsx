import React from 'react'
import { Header } from '../components/Header'
import { Text,Center,Flex } from '@chakra-ui/react'
import { TableComponent } from '../components/Table'
export const Home = () => {
  return (
    <div>
      <Header/>
      <Center>
    <Flex direction='column' pt='3em'>
    <Center>
     <Text fontSize='3xl' fontWeight={'700'} color='#394B50'>DATA</Text>
     </Center>
     <Text pt='1em'>Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>

     </Flex>
     </Center>
     <Flex
      p='5em'
     >
     <TableComponent/>
     </Flex>
     </div>

  )
}
