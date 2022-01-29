import { Flex, Select, Center, Grid } from "@chakra-ui/react";
import { useState } from "react";
import Trip from "../component/Trip";
import { url } from "../constants";
import useRequestData from "../hooks/useRequestData";

function ListTripsPage() {
  const [tripsData, isLoading, errorRequest] = useRequestData(
    `${url}/trips`,
    {
      auth: localStorage.getItem("token")
  }
  );
  const [sortingParameter,setSortingParameter]=useState('')
  const [filterParameter,setFilterParameter]=useState('')
  const updateSortingParameter=({target})=>{
      setSortingParameter(target.value)
  }
  const updateFilterParameter=({target})=>{
    setFilterParameter(target.value)
}
  const lista =
    tripsData &&
    tripsData.trips &&
    tripsData.trips.map((trip) => {
      return (
        <Trip
          description={trip.description}
          key={trip.id}
          name={trip.name}
          data={trip.date}
          id={trip.id}
          duration={trip.durationInDays}
          planet={trip.planet}
        />
      );
    }).sort((currentTrip,nextTrip)=>{
      switch(sortingParameter){
        case 'Destino':
          return currentTrip.props.name.localeCompare(nextTrip.name);
        case 'Duracao':
          return currentTrip.props.duration - nextTrip.props.duration
        default:
          return 
        }
      
    }).filter((trip)=>{
     
    
        return  trip.props.planet.includes(filterParameter)
      }
    ) ;
  return (
    <div>
      <Flex>
        <Select
          type="text"
          size="md"
          m="1rem"
          w="20rem"
          borderColor="purple.400"
          focusBorderColor="purple.500"
          placeholder="Destino"
          onChange={updateFilterParameter}
        >
          <option value="Saturno">Saturno</option>
          <option value="Netuno">Netuno</option>
          <option value="Urano">Urano</option>
          <option value="Terra">Terra</option>
          <option value="Marte">Marte</option>
          <option value="Jupiter">Júpiter</option>
          <option value="Venus">Vênus</option>
          <option value="Mercurio">Mercúrio</option>
          <option value="Plutao">Plutão</option>
        </Select>

        <Select
          type="text"
          size="md"
          m="1rem"
          w="20rem"
          borderColor="purple.400"
          focusBorderColor="purple.500"
          placeholder="Ordenar por"
          onChange={updateSortingParameter}
        >
          <option value="Destino">Destino</option>
          <option value="Duracao">Duração (dias)</option>
        </Select>
      </Flex>
      <Center>
        <Grid templateColumns="1fr 1fr 1fr" gap={6} m="1rem">
          {isLoading && <p>Carregando...</p>}
          {!isLoading && lista }
         {errorRequest && <p>Ocorreu um erro</p>}
        </Grid>
      </Center>
    </div>
  );
}

export default ListTripsPage;
