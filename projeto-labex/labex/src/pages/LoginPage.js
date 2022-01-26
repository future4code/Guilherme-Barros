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
import { useState } from "react";
import { httpClient } from "../constants";
function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const goBack = () => {
    history.push("/");
  };

  const onChangeEmail = ({ target }) => {
    setEmail(target.value);
  };
  const onChangePassword = ({ target }) => {
    setPassword(target.value);
  };
  const onSubmitLogin = (e) => {
    e.preventDefault();

    httpClient
      .post("/login", {
        email,
        password,
      })
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        history.push("/admin/trips/list");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      minH="100vh"
      onSubmit={onSubmitLogin}
    >
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
        autoComplete="email"
        value={email}
        onChange={onChangeEmail}
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
        value={password}
        onChange={onChangePassword}
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
        <Button
          type="submit"
          onClick={onSubmitLogin}
          colorScheme="purple"
          m="2rem"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

export default LoginPage;
