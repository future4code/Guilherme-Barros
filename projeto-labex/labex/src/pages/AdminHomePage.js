import { Button, Box, Flex, Text, Grid } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { httpClient } from "../constants";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
function AdminHomePage() {

  const [trips, setTrips] = useState([]);
  useProtectedPage();
  const history = useHistory();
  useEffect(() => {
    getTrips();
  }, [trips]);
  const getTrips = () => {
    httpClient
      .get(`/trips`)
      .then(({ data }) => {
        setTrips(data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteTrip = async (tripId) => {
    await httpClient
      .delete(`trips/${tripId}`)
      .then((res) => {
        alert("Viagem deletada!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const goBack = () => {
    history.push("/");
  };
  const goToDetailsPage = (tripId) => {
    history.push(`/admin/trips/${tripId}`);
  };
  const goToCreateTripPage = () => {
    history.push("/admin/trips/create");
  };
  const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
  };
  const tripList = trips.map((trip) => {
    return (
      <Flex justify="center" key={trip.id}>
        <Box
          bg="white"
          w="auto"
          p={4}
          border="1px solid purple"
          mb={10}
          borderRadius="15"
          cursor={"pointer"}
          _hover={{ bg: "gray.200" }}
        >
          <Grid
            justify="center"
            templateColumns="21em 1fr"
            templateRows={"1fr"}
          >
            <Text
              fontSize="3xl"
              fontWeight="700"
              onClick={() => goToDetailsPage(trip.id)}
            >
              {trip.name}
            </Text>
            <DeleteIcon
              fontSize="3xl"
              color="purple"
              mt={10}
              onClick={() => deleteTrip(trip.id)}
            />
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
      {tripList}
    </>
  );
}

export default AdminHomePage;
