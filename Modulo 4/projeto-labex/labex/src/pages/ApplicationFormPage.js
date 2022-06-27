import {
  Text,
  Flex,
  Input,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
import { countriesUrl, headers, httpClient } from "../constants";
import useForm from "../hooks/useForm";
import useRequestData from "../hooks/useRequestData";

function ApplicationFormPage() {
  const params = useParams();
  const history = useHistory();
  const [countries, isLoadingCountries, errorCountries] = useRequestData(`${countriesUrl}/${params.tripId}`, headers);
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    profession: "",
    country: "",
    applicationText: "",
  });

  const applyToTrip = (e) => {
    e.preventDefault();
    httpClient
      .post(`/trips/${params.trip}/apply`, form)
      .then(({ data }) => {
        alert("Inscrito para a viagem");
      })
      .catch((err) => {
        console.log(err);
      });
    cleanFields();
  };

  const goBack = () => {
    history.goBack();
  };
const paises=countries && countries.map((pais,index)=>{
  return (<>
 <option key={index} value={pais.nome.abreviado}>{pais.nome.abreviado}</option>

  </>)
})
  return (
    <form onSubmit={applyToTrip} method="POST">
      <Flex justify="center" direction="column" align="center" minH="100vh">
        <Text color="purple" fontWeight="600" fontSize="5xl" m="1em">
          Inscrição para a Viagem selecionada
        </Text>

        <Input
          type="text"
          placeholder="Nome"
          size="md"
          m="1rem"
          w="30rem"
          p="1em"
          name="name"
          borderColor="purple.400"
          focusBorderColor="purple.500"
          autoFocus
          autoComplete="nome"
          onChange={onChange}
          value={form.name}
          required
        />
        <Input
          type="number"
          placeholder="Idade"
          size="md"
          m="1rem"
          w="30rem"
          p="1em"
          borderColor="purple.400"
          focusBorderColor="purple.500"
          name="age"
          onChange={onChange}
          value={form.age}
          required
        />
        <Input
          type="text"
          placeholder="Profissão"
          size="md"
          m="1rem"
          w="30rem"
          p="1em"
          name="profession"
          value={form.profession}
          borderColor="purple.400"
          focusBorderColor="purple.500"
          onChange={onChange}
          required
        />
        <Select
          type="text"
          placeholder="País"
          size="md"
          m="1rem"
          w="30rem"
          name="country"
          value={form.country}
          onChange={onChange}
          borderColor="purple.400"
          focusBorderColor="purple.500"
          required
        >
         {paises}
        </Select>
        <Textarea
          type="text"
          placeholder="Texto de candidatura (Por que você merece fazer uma viagem conosco?)"
          size="md"
          m="1rem"
          w="30rem"
          borderColor="purple.400"
          focusBorderColor="purple.500"
          name="applicationText"
          value={form.applicationText}
          onChange={onChange}
          required
        />
        <Flex>
          <Button colorScheme="purple" m="2rem" onClick={goBack}>
            Voltar
          </Button>
          <Button type="submit" colorScheme="purple" m="2rem">
            Enviar
          </Button>
        </Flex>
      </Flex>
    </form>
  );
}

export default ApplicationFormPage;
