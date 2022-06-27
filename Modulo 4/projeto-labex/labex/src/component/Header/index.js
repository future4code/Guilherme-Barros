import { Box, Text, Flex, Spacer, ChakraProvider } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import theme from "../../theme";
function Header() {
  const history = useHistory();
  useProtectedPage();
  const goToLoginPage = () => {
    history.push("/login");
  };
  const goToListTripsPage = () => {
    history.push("/trips");
  };

  const goToHomePage=()=>{
    history.push('/')
  }
  const goToListAdminPage=()=>{
   
    history.push('/admin/trips/list')
  }
  
  return (
    <ChakraProvider theme={theme}>
    <Flex bg="black" w="100%" p={4} color="white">
      <Text fontSize="5xl" p="0.1em" ml="20px" onClick={goToHomePage} cursor='pointer'  _hover={{color:'purple.500'}} fontWeight={'600'}>
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
            mr="20px"
            mt="0.7em"
            onClick={goToLoginPage}
            _hover={{color:'purple.500'}}
            fontWeight={'500'}
          >
            Login
          </Text>
          <Text fontSize="2xl" p="0.2em" ml="20px" mt="0.7em" >
            |
          </Text>
          <Text
            fontSize="2xl"
            cursor="pointer"
            p="0.2em"
            ml="40px"
            mr="20px"
            mt="0.7em"
            onClick={goToListAdminPage}
            _hover={{color:'purple.500'}}
            fontWeight={'500'}
          >
            Home
          </Text>
          <Text fontSize="2xl" p="0.2em" ml="20px" mt="0.7em">
            |
          </Text>
          <Text
            fontSize="2xl"
            cursor="pointer"
            p="0.2em"
            ml="40px"
            mr="20px"
            mt="0.7em"
            onClick={goToListTripsPage}
            _hover={{color:'purple.500'}}
            fontWeight={'500'}
          >
            Viagens
          </Text>
          
        </Flex>
      </Box>
    </Flex>
    </ChakraProvider>
  );
}

export default Header;
