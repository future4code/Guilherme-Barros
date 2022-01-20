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

function ApplicationFormPage() {
  return (
    <>
    <Flex justify='center' direction='column' align='center' minH='100vh'>
      <Text color="purple" fontWeight="600" fontSize="5xl" m='1em'>
        Incrição para Colônia Lunar
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
        <Button colorScheme='purple' m='2rem'>Voltar</Button>
        <Button type="submit" colorScheme='purple' m='2rem' >Enviar</Button>
        </Flex>
      </Flex>
    </>
  );
}

export default ApplicationFormPage;
