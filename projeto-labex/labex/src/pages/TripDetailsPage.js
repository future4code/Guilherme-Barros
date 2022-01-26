import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Pending from "../component/Pending";
import { httpClient, url } from "../constants";
import { useProtectedPage } from "../hooks/useProtectedPage";
import useRequestData from "../hooks/useRequestData";

function TripDetailsPage() {
 const [trip,setTrip]=useState({})
  const params=useParams()
  const history=useHistory()
  useProtectedPage();
  const goToListAdminPage=()=>{
    history.goBack()
  }
  useEffect(()=>{
    httpClient.get(`/trip/${params.id}`)
    .then(({data})=>{
      setTrip(data.trip)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <Flex justify="center" direction="column" align="center" minH='80vh' key={trip.id} >
      
      <Text fontSize='4xl' fontWeight="700" color="purple.600">{trip.name}</Text>
      <Text fontSize='3xl' fontWeight="500" p='3' mr='90px'>Detalhes da Viagem</Text>
    <Box border='1px solid purple' w="25%"  borderRadius="15" p='1em' mr='30px'>
      <Text m='0.7em'><Text color='purple'>Descrição:</Text>{trip.description}</Text>
      <Text m='0.7em'>Planeta/Satélite: {trip.planet}</Text>
      <Text m='0.7em'>Data de início: {trip.date}</Text>
      <Text m='0.7em'>Duração (dias): {trip.durationInDays}</Text>
    </Box>
    <Text fontSize='3xl' fontWeight="500">Candidaturas Pendentes</Text>
    <Pending/>
    <Text fontSize='3xl' fontWeight="500">Candidaturas Aprovadas</Text>
<Button onClick={goToListAdminPage}>Voltar</Button>
    </Flex>
  );
}

export default TripDetailsPage;
