import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import Highlights from "../component/Highlights";
function HomePage() {
  const history = useHistory();
  const goToListTripsPage = () => {
    history.push("/trips");
  };
  return (
    <>
      <Flex color="white">
        <Box
          bg="purple"
          h="auto"
          w="50%"
          pt="2em"
          pb="0.3em"
          pl="0.5em"
          fontSize="6xl"
        >
          Que tal conhecer o espaço mais de perto? A LabeX te leva!
          <Text
            fontSize="3xl"
            bg="purple"
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
            fontWeight="600"
            ml="9rem"
            mt="2rem"
          >
            DESTAQUES
            <Spacer mb="0.5rem" />
            <Highlights />
            <Spacer mb="3rem" />
            <Highlights />
            <Spacer mb="3rem" />
            <Highlights />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default HomePage;
