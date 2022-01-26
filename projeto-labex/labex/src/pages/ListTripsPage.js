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
        />
      );
    });

  return (
    <div>
      <Flex>
        <Select
          type="text"
          size="md"
          m="1rem"
          w="20rem"
          borderColor="purple"
          focusBorderColor="purple.400"
          placeholder="Destino"
        >
          <option>Marte</option>
          <option>Lua</option>
          <option>Saturno</option>
          <option>Vênus</option>
        </Select>

        <Select
          type="text"
          size="md"
          m="1rem"
          w="20rem"
          borderColor="purple"
          focusBorderColor="purple.400"
          placeholder="Ordenar por"
        >
          <option value="Destino">Destino</option>
          <option value="Duracao">Duração (dias)</option>
        </Select>
      </Flex>
      <Center>
        <Grid templateColumns="1fr 1fr 1fr" gap={6} m="1rem">
          {lista}
        </Grid>
      </Center>
    </div>
  );
}

export default ListTripsPage;
