import React from 'react'
import {TableContainer,Table,Thead,Tr,Td,Th,Tbody} from '@chakra-ui/react'
export const TableComponent = ({data}) => {
  
  
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
       {data.map((participant)=>{
        return(
          <Tr key={participant.id}>
            <Td>{participant.name}</Td>
            <Td>{participant.lastName}</Td>
            <Td isNumeric>{participant.participation}%</Td>
          </Tr>
        )
       })}
      </Tbody>
    
    </Table>
  </TableContainer>
  )
}
