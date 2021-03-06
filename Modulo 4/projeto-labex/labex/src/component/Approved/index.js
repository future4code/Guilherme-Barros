import { Button, Flex, Text, Box, Center } from '@chakra-ui/react';

function Approved(props) {


const approve = ()=>{
  props.chooseCandidate(true, props.candidateId)
}
const deny = ()=>{
  props.chooseCandidate(false, props.candidateId)
}

  return  <Flex>
     
	  <Box  boxShadow="rgb(0 0 0 / 30%) 0px 4px 8px 0px"
        p="5"
        rounded="md"
        m={10}>
  <Text fontSize="2xl">Nome: {props.name}</Text>
  <Text fontSize="2xl">Profissão: {props.profession}</Text>
  <Text fontSize="2xl">Idade: {props.age} anos</Text>
	
  </Box>
 
  </Flex>

}
export default Approved;