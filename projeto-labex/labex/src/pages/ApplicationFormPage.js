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
import { httpClient} from "../constants";
import useForm from "../hooks/useForm";


function ApplicationFormPage() {
  const params = useParams();
  const history = useHistory();
  const {form,onChange, cleanFields}=useForm({name:'',age:'',profession:'',country:'',applicationText:''})
 
 const applyToTrip=(e)=>{
   e.preventDefault();
   httpClient.post(`/trips/${params.trip}/apply`,form)
   .then(({data})=>{
     alert("Inscrito para a viagem")
     
   }).catch((err)=>{
      console.log(err)
   })
   cleanFields()
 }

  const goBack = () => {
    history.goBack();
  };

  return (
    <form onSubmit={applyToTrip}>
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
          borderColor="purple"
          focusBorderColor="purple.400"
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
          borderColor="purple"
          name="age"
          focusBorderColor="purple.400"
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
          borderColor="purple"
          onChange={onChange}
          focusBorderColor="purple.400"
          required
        />
        <Select
          type="text"
          placeholder="País"
          size="md"
          m="1rem"
          w="30rem"
          borderColor="purple"
          name="country"
          value={form.country}
          onChange={onChange}
          focusBorderColor="purple.400"
          required
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
          name="applicationText"
          value={form.applicationText}
          onChange={onChange}
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
    </form>
  );
}

export default ApplicationFormPage;
