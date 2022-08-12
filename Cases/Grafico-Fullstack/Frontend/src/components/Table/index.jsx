import React, { useEffect } from 'react'
import { useState } from 'react'
import { api } from '../../constants'
import {TableContainer,Table,Thead,Tr,Td,Th,Tbody} from '@chakra-ui/react'
export const TableComponent = () => {
  const [participants,setParticipants]=useState([])

  const getParticipants=()=>{
    api.get("/participant/all").then(({data})=>setParticipants(data))
    .catch((error)=>{console.log(error.message);})
  }
  useEffect(() => {
    getParticipants()
  
  }, [participants])
  
  return (
    <TableContainer
    width={'30em'}
    
    >
    <Table variant='simple'>
      
      <Thead>
        <Tr>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th isNumeric>Participation</Th>
        </Tr>
      </Thead>
      <Tbody>
       {participants.map((participant)=>{
        return(
          <Tr>
            <Td>{participant.name}</Td>
            <Td>{participant.lastName}</Td>
            <Td isNumeric>{participant.participation}</Td>
          </Tr>
        )
       })}
      </Tbody>
    
    </Table>
  </TableContainer>
  )
}
