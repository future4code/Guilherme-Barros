import { Box, Text, Spacer, Button, Center, Grid } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
function Highlights(props) {
  const history=useHistory()
  const goToListTripsPage = () => {
    history.push("/trips");
  };
  return (
    <Grid gap={5} >
   
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

        <Center pt="0.5em">
          <Button colorScheme="purple" onClick={goToListTripsPage}>Saiba Mais</Button>
        </Center>
      </Box>
      
    </Grid>
  );
}

export default Highlights;
