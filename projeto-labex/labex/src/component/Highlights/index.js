import { Box, Text, Spacer, Button, Center, Grid } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
function Highlights(props) {
  const history = useHistory();
  const goToListTripsPage = () => {
    history.push("/trips");
  };
  let data=new Date(props.data)
  const dataFormatada=data.toLocaleDateString('pt-BR',{timeZone:'UTC'})
  return (
    <Grid gap={5}>
      <Box
        border="1px solid"
        borderColor={"purple.500"}
        borderRadius={6}
        w="auto"
        h="auto"
        p="0.5em"
        color="black"
        fontSize="3xl"
        mt={7}
      >
        {props.name}
        <Spacer />
        <Text as="i" color="purple.500">
          {dataFormatada}
        </Text>
        <Spacer />

        <Center pt="0.5em">
          <Button colorScheme="purple" onClick={goToListTripsPage}>
            Saiba Mais
          </Button>
        </Center>
      </Box>
    </Grid>
  );
}

export default Highlights;
