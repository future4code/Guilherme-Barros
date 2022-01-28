import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Approved from "../component/Approved";
import Pending from "../component/Pending";
import { httpClient } from "../constants";
import { useProtectedPage } from "../hooks/useProtectedPage";

function TripDetailsPage() {
  const params = useParams();
  const history = useHistory();

  const [tripDetails, setTripDetails] = useState({});
  const [candidates,setCandidates]=useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useProtectedPage();

  const goToListAdminPage = () => {
    history.goBack();
  };

  const getTripDetails = () => {
    setIsLoading(true);
    httpClient
      .get(`/trip/${params.id}`)
      .then(({ data }) => {
        setIsLoading(false);
        setTripDetails(data.trip);
       setCandidates(data.trip.candidates)
        console.log(data.trip);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  useEffect(() => {
    getTripDetails();
  }, []);
  const chooseCandidate = (option, candidateId) => {
    httpClient
      .put(`/trips/${params.id}/candidates/${candidateId}/decide`, {
        approve: option,
      })
      .then(() => {
        getTripDetails();
      });
  };
 const candidatos = candidates.map((candidato, index) => {
    return (
      <Pending
        name={candidato.name}
        profession={candidato.profession}
        age={candidato.age}
        country={candidato.country}
        applicationText={candidato.applicationText}
        key={index}
        candidateId={candidato.id}
        chooseCandidate={chooseCandidate}
      />
    );
  });
  const candidatosAprovados=tripDetails.approved ? tripDetails.approved.map((candidato,index)=>{
    return (
      <> <hr/><Approved name={candidato.name}
       profession={candidato.profession} 
       age={candidato.age}
       key={index}
    
       />
       </>)
  }) : []

  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      minH="80vh"
      key={tripDetails.id}
    >
      <Text fontSize="4xl" fontWeight="700" color="purple.600">
        {isLoading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>Houve um erro</p>
        ) : (
          tripDetails.name
        )}
      </Text>
      <Text fontSize="3xl" fontWeight="500" p="3" mr="90px">
        Detalhes da Viagem
      </Text>
      <Box
        border="1px solid purple"
        w="50%"
        borderRadius="15"
        p="1em"
        mr="30px"
      >
        <Text m="0.7em" fontSize="2xl">
          <Text color="purple" fontSize="2xl">
            Descrição:
          </Text>
          {isLoading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p>Houve um erro</p>
          ) : (
            tripDetails.description
          )}
        </Text>
        <Text m="0.7em" fontSize="2xl">
          Planeta/Satélite:{" "}
          {isLoading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p>Houve um erro</p>
          ) : (
            tripDetails.planet
          )}
        </Text>
        <Text m="0.7em" fontSize="2xl">
          Data de início:{" "}
          {isLoading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p>Houve um erro</p>
          ) : (
            tripDetails.date
          )}
        </Text>
        <Text m="0.7em" fontSize="2xl">
          Duração (dias):{" "}
          {isLoading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p>Houve um erro</p>
          ) : (
            tripDetails.durationInDays
          )}
        </Text>
      </Box>
      <Text fontSize="3xl" fontWeight="500">
        Candidaturas Pendentes
      </Text>

      {isLoading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>Houve um erro</p>
      ) : candidatos.length == 0 ? (
        <p>Sem candidatos</p>
      ) : (
        candidatos
      )}

      <Text fontSize="3xl" fontWeight="500">
        Candidaturas Aprovadas
      </Text>
      {isLoading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>Houve um erro</p>
      ) : candidatosAprovados.length == 0 ? (
        <p>Sem candidatos aprovados</p>
      ) : (candidatosAprovados)}
      <Button onClick={goToListAdminPage} colorScheme="purple" m="2rem">
        Voltar
      </Button>
    </Flex>
  );
}

export default TripDetailsPage;
