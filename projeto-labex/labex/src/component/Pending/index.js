import { Button, Flex, Text, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {httpClient} from '../../constants/index'
function Pending() {
	const [candidate,setCandidate]=useState({});
	const params=useParams();
  useEffect(() => {
    httpClient.get(`/trip/${params.id}`)
    .then(({data})=>{
	    setCandidate(data.trip.candidates)
    }).catch((err)=>{
	console.log(err)	    
}) 

}, []);
  return <Flex>
	  <Box>
  <Text>Nome:{candidate.name}</Text>
  <Text>Profissão:{candidate.profession}</Text>
  <Text>Idade:{candidate.age}</Text>
  <Text>País:{candidate.country}</Text>
  <Text>Texto para candidatura:{candidate.applicationText}</Text>
	<Button>Aprovar</Button>
	<Button>Reprovar</Button>
	</Box>
  </Flex>;
}
export default Pending;
