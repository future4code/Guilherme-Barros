import useRequestData from "../hooks/useRequestData";
import { Button, Box, Flex, Text, Grid } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { url } from "../constants";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
function AdminHomePage() {
  const [tripsData, isLoading, errorRequest] = useRequestData(
    `${url}/trips`,
    {
      auth: localStorage.getItem("token")
  }
  );
  useProtectedPage();
  const history = useHistory();
  useState(() => {}, []);
  const goBack = () => {
    history.push("/");
  };
  const goToDetailsPage = (tripId) => {
    history.push(`/admin/trips/${tripId}`)
  }
  const goToCreateTripPage=()=>{
    history.push('/admin/trips/create')
  }
  const logout=()=>{
    window.localStorage.removeItem('token')
    history.push('/login')
  }
  const trips =
    tripsData &&
    tripsData.trips &&
    tripsData.trips.map((trip) => {
      return (
        <Flex justify="center">
          <Box
            key={trip.id}
            bg="white"
            w="auto"
            p={4}
            border="1px solid purple"
            mb={10}
            borderRadius="15"
            cursor={"pointer"}
            _hover={{ bg: "gray.200" }}
            onClick={()=>goToDetailsPage(trip.id)}
          >
            <Grid
              justify="center"
              templateColumns="21em 1fr"
              templateRows={"1fr"}
            >
              <Text fontSize="3xl" fontWeight="700">
                {trip.name}
              </Text>
              <DeleteIcon fontSize="3xl" color="purple" mt={10} />
              <Text fontSize="2xl" color="purple.700">
                {trip.date}
              </Text>
            </Grid>
          </Box>
        </Flex>
      );
    });
  return (
    <>
      <Flex justify="center" direction="column" align="center" minH="40vh">
        <Text fontSize="5xl" fontWeight="700" color="purple.600">
          Painel Administrativo
        </Text>
        <Flex>
          <Button colorScheme="purple" m="2rem" onClick={goBack}>
            Voltar
          </Button>
          <Button colorScheme="purple" m="2rem" onClick={goToCreateTripPage}>
            Criar Viagem
          </Button>
          <Button colorScheme="purple" m="2rem" onClick={logout}>
            Logout
          </Button>
        </Flex>
      </Flex>
      {trips}
    </>
  );
}

export default AdminHomePage;
