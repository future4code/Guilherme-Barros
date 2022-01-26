import { Button, Flex, Input, Select, Text, Textarea } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";

function CreateTripPage() {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  useProtectedPage();
  return (
    <>
      <Flex justify="center" direction="column" align="center" minH="100vh">
        <Text fontSize="5xl" fontWeight="700" color="purple.600">Criar Viagem</Text>
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
        <Select
          type="text"
          placeholder="Planeta"
          size="md"
          m="1rem"
          w="30rem"
          borderColor="purple"
          focusBorderColor="purple.400"
          autoFocus
          autoComplete="nome"
          required
        >
          <option value="Saturno">Saturno</option>
          <option value="Netuno">Netuno</option>
          <option value="Urano">Urano</option>
          <option value="Terra">Terra</option>
          <option value="Marte">Marte</option>
          <option value="Júpiter">Júpiter</option>
          <option value="Vênus">Vênus</option>
          <option value="Mercúrio">Mercúrio</option>
          <option value="Plutão">Plutão</option>
        </Select>
        <Input
          type="date"
          placeholder="Data de Início"
          required
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
          placeholder="Duração (dias)"
          size="md"
          m="1rem"
          w="30rem"
          p="1em"
          borderColor="purple"
          focusBorderColor="purple.400"
          autoFocus
          autoComplete="nome"
          required
        />
        <Textarea
          placeholder="Descrição..."
          size="md"
          m="1rem"
          w="30rem"
          borderColor="purple"
          focusBorderColor="purple.400"
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
    </>
  );
}

export default CreateTripPage;
