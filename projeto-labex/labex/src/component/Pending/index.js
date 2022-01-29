import { Button, Flex, Text, Box, Center } from "@chakra-ui/react";

function Pending(props) {
  const approve = () => {
    props.chooseCandidate(true, props.candidateId);
  };
  const deny = () => {
    props.chooseCandidate(false, props.candidateId);
  };

  return (
    <Flex maxW={"50%"}>
      <Box
        boxShadow="rgb(0 0 0 / 30%) 0px 4px 8px 0px"
        p="5"
        rounded="md"
        m={10}
      >
        <Text fontSize="2xl">Nome: {props.name}</Text>
        <Text fontSize="2xl">Profissão: {props.profession}</Text>
        <Text fontSize="2xl">Idade: {props.age} anos</Text>
        <Text fontSize="2xl">País: {props.country}</Text>
        <Text fontSize="2xl">
          Texto para candidatura: {props.applicationText}
        </Text>
        <Center>
          <Button colorScheme="purple" m="1rem" onClick={approve}>
            {" "}
            Aprovar
          </Button>
          <Button colorScheme="purple" m="1rem" onClick={deny}>
            Reprovar
          </Button>
        </Center>
      </Box>
    </Flex>
  );
}
export default Pending;
