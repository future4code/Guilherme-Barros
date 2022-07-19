import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Text, Flex, Spacer, ChakraProvider, Spinner} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import Highlights from "../component/Highlights";
import {  url } from "../constants";
import useRequestData from "../hooks/useRequestData";
import theme from "../theme/";
function HomePage() {
  const [tripsData, isLoading, errorRequest] = useRequestData(
    `${url}/trips`,
    {}
  );

  const history = useHistory();
  const goToListTripsPage = () => {
    history.push("/trips");
  };
  const high =
    tripsData &&
    tripsData.trips &&
    tripsData.trips
    .filter((trip) => {
      return trip.planet === "Marte";
    })
      .map((trip) => {
        return (
          <>
            <Highlights
              key={trip.id}
              name={trip.name}
              data={trip.date}
              planet={trip.planet}
              duration={trip.durationInDays}
            />
            <Spacer p="0.3em" />
          </>
        );
      })
  return (
    <ChakraProvider theme={theme}>
      
      <Flex color="white">
        <Box
          bg="purple.700"
          h="auto"
          w="50%"
          pt="1em"
          pb="0.3em"
          pl="1.10em"
          pr="0.5em"
          fontSize="6xl"
          fontWeight={'500'}
        >
          Que tal conhecer o espaço mais de perto? A LabeX te leva!
          <Text
            fontSize="3xl"
            bg="purple.700"
            w="100%"
            pt="5em"
            pl="1em"
            color="white"
          >
            Clique aqui e descubra opções de viagens espaciais!{" "}
            <ArrowForwardIcon onClick={goToListTripsPage} cursor="pointer" />
          </Text>
        </Box>

        <Flex>
          <Box
            fontSize="7xl"
            color="gray.600"
            
            ml="9rem"
            mt="2rem"
       
          >
          <Text fontWeight={'600'}> DESTAQUES </Text>
            {isLoading && <Spinner p={10} m={150} size='xl' color='purple.500'/>}
            {!isLoading && high}
            {errorRequest && <p>Ocorreu um erro</p>}
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default HomePage;
