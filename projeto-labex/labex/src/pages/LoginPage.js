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
import { httpClient } from "../constants";
import useForm from "../hooks/useForm";
function LoginPage() {
  const history = useHistory();
  const {form,onChange, cleanFields}=useForm({email:'',password:''})
  const goBack = () => {
    history.push("/");
  };
  
  const onSubmitLogin = (e) => {
    e.preventDefault();

    httpClient
      .post("/login", form)
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        history.push("/admin/trips/list");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
      cleanFields()
  };
  return (
    <form onSubmit={onSubmitLogin}>
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
        pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
      name="email"
        borderColor="purple"
        focusBorderColor="purple.400"
        autoFocus
        autoComplete="email"
        value={form.email}
        onChange={onChange}
        required
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
        value={form.password}
        name="password"
        onChange={onChange}
       required
       pattern="^.{6,}"
       title="Senha deve possuir ao menos 6 caracteres"
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
          colorScheme="purple"
          m="2rem"
        >
          Entrar
        </Button>
      
      </Flex>
      
    </Flex>
    </form>
  );
}

export default LoginPage;
