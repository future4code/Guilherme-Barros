import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
function Header() {
  const history = useHistory();
  const goToLoginPage = () => {
    history.push("/login");
  };
  const goToListTripsPage = () => {
    history.push("/trips");
  };

  const goToHomePage=()=>{
    history.push('/')
  }
  return (
    <Flex bg="black" w="100%" p={4} color="white">
      <Text fontSize="5xl" p="0.1em" ml="20px" onClick={goToHomePage} cursor='pointer'>
        LabeX
      </Text>
      <Spacer />
      <Box flex="0.1">
        <Flex>
          <Text
            cursor="pointer"
            fontSize="2xl"
            p="0.2em"
            ml="20px"
            mt="0.7em"
            onClick={goToLoginPage}
          >
            Login
          </Text>
          <Text fontSize="2xl" p="0.2em" ml="20px" mt="0.7em">
            |
          </Text>
          <Text
            fontSize="2xl"
            cursor="pointer"
            p="0.2em"
            ml="20px"
            mr="20px"
            mt="0.7em"
            onClick={goToListTripsPage}
          >
            Viagens
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Header;
