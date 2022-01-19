import { Box, Text, Flex, Spacer } from "@chakra-ui/react";

function Header() {
  return (
    <Flex bg="black" w="100%" p={4} color="white">
      <Text fontSize="5xl" p="0.1em" ml='20px'>LabeX</Text>
      <Spacer />
      <Box flex="0.1">
        
          <Flex>
            <Text fontSize="2xl" p="0.2em" ml="20px" mt='0.7em'>
              Login
            </Text>
            <Text fontSize="2xl" p="0.2em" ml="20px" mt='0.7em'>
              |
            </Text>
            <Text fontSize="2xl" p="0.2em" ml="20px" mr="20px" mt='0.7em'>
              Viagens
            </Text>
          </Flex>
	
      </Box>
    </Flex>
  );
}

export default Header;
