import {
  Text,
  Flex,
  Spacer,
  FormControl,
  Input,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
import { url } from "../constants";
import useRequestData from "../hooks/useRequestData";
import { httpClient} from "../constants";

function ApplicationFormPage() {
  const params = useParams();
  const history = useHistory();

  const [trip, isLoadingTrip, errorTrip] = useRequestData(
    `${url}/trip/${params.trip}`,
    {
      auth: localStorage.getItem("token")
  }
  );
 const createTrip=()=>{
  {/** httpClient.post(`trips/${tripId}/apply`)
   .then(({data})=>{
      setTrip(data.trip)
   }).catch((err)=>{
      console.log(err)
   })*/} 
 }
  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <Flex justify="center" direction="column" align="center" minH="100vh">
        <Text color="purple" fontWeight="600" fontSize="5xl" m="1em">
          {trip && trip.name && trip.name}
        </Text>

        <Input
          type="text"
          placeholder="Nome"
          size="md"
          m="1rem"
          w="30rem"
          p="1em"
          borderColor="purple"
          focusBorderColor="purple.400"
          autoFocus
          autoComplete="nome"
        />
        <Input
          type="number"
          placeholder="Idade"
          size="md"
          m="1rem"
          w="30rem"
          p="1em"
          borderColor="purple"
          focusBorderColor="purple.400"
        />
        <Input
          type="text"
          placeholder="Profissão"
          size="md"
          m="1rem"
          w="30rem"
          p="1em"
          borderColor="purple"
          focusBorderColor="purple.400"
        />
        <Select
          type="text"
          placeholder="País"
          size="md"
          m="1rem"
          w="30rem"
          borderColor="purple"
          focusBorderColor="purple.400"
        >
          <option value="Brasil">Brasil</option>
          <option value="Estados Unidos">Estados Unidos</option>
          <option value="Canadá">Canadá</option>
        </Select>
        <Textarea
          type="text"
          placeholder="Texto de candidatura (Por que você merece fazer uma viagem conosco?)"
          size="md"
          m="1rem"
          w="30rem"
          borderColor="purple"
          focusBorderColor="purple.400"
        />
        <Flex>
          <Button colorScheme="purple" m="2rem" onClick={goBack}>
            Voltar
          </Button>
          <Button type="submit" colorScheme="purple" m="2rem" onClick={createTrip}>
            Enviar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default ApplicationFormPage;
