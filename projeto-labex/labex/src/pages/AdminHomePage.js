import { Button, Box, Flex, Text, Grid } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { httpClient } from "../constants";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import TripCard from "../component/TripCard";
function AdminHomePage() {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useProtectedPage();
  const history = useHistory();
  useEffect(() => {
    getTrips();
  }, [trips]);
  const getTrips = () => {
    setIsLoading(true);
    httpClient
      .get(`/trips`)
      .then(({ data }) => {
        setTrips(data.trips);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
    setIsLoading(false);
  };
  const deleteTrip = async (tripId) => {
   
     
      const choose = window.confirm("Deseja mesmo deletar essa viagem?");
      if(choose){
      await httpClient
        .delete(`trips/${tripId}`)
      .then((res) => {  
        alert('Viagem deletada!')      
      })
      .catch((err) => {
        console.log(err);
      })};
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
      <TripCard 
      name={trip.name}
      data={trip.date}
      goToDetailsPage={goToDetailsPage}
      deleteTrip={deleteTrip}
      id={trip.id}/>
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
      {isLoading && <p>Carregando...</p>}
      {!isLoading && tripList}
    </>
  );
}

export default AdminHomePage;
