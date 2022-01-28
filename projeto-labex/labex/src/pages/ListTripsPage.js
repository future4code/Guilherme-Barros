import { Flex, Select, Center, Grid } from "@chakra-ui/react";
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
      console.log(tripsData);
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
          <option value="Saturno">Saturno</option>
          <option value="Netuno">Netuno</option>
          <option value="Urano">Urano</option>
          <option value="Terra">Terra</option>
          <option value="Marte">Marte</option>
          <option value="Júpiter">Júpiter</option>
          <option value="Vênus">Vênus</option>
          <option value="Mercúrio">Mercúrio</option>
          <option value="Plutão">Plutão</option>
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
