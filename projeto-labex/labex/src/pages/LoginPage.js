import {
  Box,
  Text,
  Flex,
  Spacer,
  Input,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import "../App.css";
function LoginPage() {
  const history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  return (
    <Flex justify="center" direction="column" align="center" minH="100vh">
      <Text fontSize="4xl" color="purple.600" fontWeight="700" mb="2rem">
        Login
      </Text>

      <Input
        type="email"
        placeholder="Email"
        size="md"
        m="1rem"
        w="30rem"
        p="1em"
        borderColor="purple"
        focusBorderColor="purple.400"
        autoFocus
        autoComplete='email'
      />

      <Input
        type="password"
        placeholder="Senha"
        size="md"
        m="1rem"
        w="30rem"
        p="1em"
        borderColor="purple"
        focusBorderColor="purple.400"
      />
      <Flex justify="center" align="center">
        <Button
          colorScheme="purple"
          m="2rem"
          variant="outline"
          _hover={{ bg: "purple.600", color: "white" }}
          onClick={goBack}
        >
          Voltar
        </Button>
        <Button type="submit" colorScheme="purple" m="2rem">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

export default LoginPage;
