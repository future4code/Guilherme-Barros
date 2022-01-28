import { Box, Text, Spacer, Button, Center } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

function Trip(props) {
  const history = useHistory();

  const goToApplicationFormPage = (tripId) => {
    history.push(`/application/${tripId}`)
  }
  return (
    <>
   
      <Box
        border="1px solid purple"
        borderRadius={6}
        w="auto"
        h="auto"
        p="0.5em"
        color="black"
        fontSize="3xl"
      >
        {props.name}
        <Spacer />
        <Text as="i" color="purple">
          {props.data}
        </Text>
        <Spacer />
	
        <Text fontSize='1.5rem'>

        Descrição:{props.description}
        </Text>
        <Center  pt="1em">
          <Button colorScheme="purple" onClick={()=>goToApplicationFormPage(props.id)}>Inscreva-se</Button>
        </Center>
      </Box>
      
    </>
  );
}

export default Trip;
