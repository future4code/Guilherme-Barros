import { Button, Flex, Text, Box, Center } from '@chakra-ui/react';

function Pending(props) {


const approve = ()=>{
  props.chooseCandidate(true, props.candidateId)
}
const deny = ()=>{
  props.chooseCandidate(false, props.candidateId)
}

  return  <Flex>
     
	  <Box>
  <Text fontSize="2xl">Nome: {props.name}</Text>
  <Text fontSize="2xl">Profissão: {props.profession}</Text>
  <Text fontSize="2xl">Idade: {props.age} anos</Text>
  <Text fontSize="2xl">País: {props.country}</Text>
  <Text fontSize="2xl">Texto para candidatura: {props.applicationText}</Text>
  <Center>
	<Button  colorScheme="purple"
          m="2rem" onClick={approve}> Aprovar</Button>
	<Button   colorScheme="purple"
          m="2rem" onClick={deny}>Reprovar</Button>
	  </Center>
  </Box>
 
  </Flex>

}
export default Pending;
